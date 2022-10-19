import Controller from "@ember/controller";
import { action } from "@ember/object";
import RSVP from "rsvp";
import config from "../config/environment";

const DEGREES_PER_METER = 1 / 111319.9;
const MARKER_OFFSET = DEGREES_PER_METER * 100;

export default class Site extends Controller {
  markerEditorVisible = false;
  marker = null;
  formLayout = "vertical";
  @action saveSite(site) {
    site.save();
    this.model.map.save();
    this.model.siteMarker.save();
    this.model.siteMarkerLocation.save();
  }
  // Actions
  @action save() {
    var self = this;
    var site = this.model.site;
    if (site.save) {
      // resolved
      self.saveSite(site);
    } else {
      // wait for resolution
      site.then(function (site) {
        self.saveSite(site);
      });
    }
  }
  /**
   * Set the marker location to the dragged position
   */
  @action dragEnd(mouseEvent) {
    var latitude = mouseEvent.target.internalPosition.lat();
    var longitude = mouseEvent.target.internalPosition.lng();
    var label = mouseEvent.target.getLabel();
    var siteMarker = this.model.site.map.siteMarker;
    var marker;
    if (siteMarker && siteMarker.get("name") === label) {
      marker = siteMarker;
    } else {
      var markers = this.model.site.map.markers;
      marker = markers.find(function (item) {
        return item.get("name") === label;
      });
    }

    if (marker) {
      marker.get("location").then(function (location) {
        location.set("latitude", latitude);
        location.set("longitude", longitude);
        location.save();
      });
    }
  }
  /**
   * Create a new marker
   */
  @action newMarker() {
    var self = this;
    var site = this.model.site;
    this.getMap(site)
      .then(function (map) {
        return RSVP.hash({
          marker: self.createMapMarker(
            self,
            map,
            map.get("siteMarker").get("location.latitude"),
            map.get("siteMarker").get("location.longitude")
          ),
          map: map,
          markers: map.get("markers"),
        });
      })
      .then(function (hash) {
        hash.markers.pushObject(hash.marker);
        hash.markers.save();
        hash.map.save();
      });
  }
  /**
   * Save the marker after modal edit
   */ @action saveMarker(formValues) {
    // Update the marker
    var marker = this.marker;
    marker.set("name", formValues.name);
  }
  /**
   * Show the marker Editor
   */
  @action showMarkerEditor(marker) {
    var self = this;
    if (marker.then) {
      // Promise - resolve
      marker.then(function (marker) {
        self.editMarker(marker);
      });
    } else {
      self.editMarker(marker);
    }
  }

  /**
   * Create a new map from the menu action
   */
  @action newMap() {
    this.createMap(this.model.site);
  }

  // End actions

  /**
   * Edit the marker using Sweet Alert
   
  @action editMarker(marker) {
    var inputValue = marker.get("name");
    Swal({
      title: "Enter the marker title",
      input: "text",
      inputValue: inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        return !value && "You need to write something!";
      },
    }).then(function (result) {
      if (!result.dismiss) {
        marker.set("name", result.value);
        marker.save();
      }
    });
  }*/
  /**
   * Get the map
   * - first check existance
   */
  @action getMap(site) {
    var map = site.get("map");
    if (map) {
      return map;
    } else {
      return this.createMap(site);
    }
  }
  /**
   * Create a map for the site
   */
  @action createMap(site) {
    var self = this;
    return this.store
      .createRecord("map", { name: this.model.site.name, zoomLevel: 8 })
      .save()
      .then(function (map) {
        // this  is new
        var markers = [];
        map.set("markers", markers);
        return RSVP.hash({
          marker: self.createMapMarker(
            self,
            map,
            config.APP.flyNSite.defaultLatitude,
            config.APP.flyNSite.defaultLongitude
          ),
          map: map,
        });
      })
      .then(function (hash) {
        var map = hash.map;
        map.set("siteMarker", hash.marker);
        site.set("map", map);
        return RSVP.hash({
          site: site.save(),
          map: map.save(),
        });
      })
      .then(function (hash) {
        return hash.map;
      });
  }

  /**
   * Create a map marker (promise) on the maps
   * does not save the map
   *@param map - the map to use
   */
  createMapMarker(self, map, latitude, longitude) {
    var site = self.get("model.site");
    var markers = map.get("markers");
    var nextIndex = markers.get("length") + 1;
    return self.store
      .createRecord("location", {
        name: site.get("name") + "Location" + nextIndex,
        latitude: MARKER_OFFSET + latitude,
        longitude: MARKER_OFFSET + longitude,
      })
      .save()
      .then(function (location) {
        return RSVP.hash({
          marker: self.store
            .createRecord("mapMarker", {
              name: site.get("name") + "Marker" + nextIndex,
            })
            .save(),
          location: location,
        });
      })
      .then(function (hash) {
        hash.marker.set("location", hash.location);
        return hash.marker.save();
      });
  }
}

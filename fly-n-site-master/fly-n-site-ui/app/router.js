import EmberRouter from "@ember/routing/router";
import config from "fly-n-site-ui/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("index");
  this.route("clubs");
  this.route("club", { path: "club/:id" });
  this.route("login");
  this.route("sites");
  this.route("site", { path: "site/:id" });
  this.route("stories");
  this.route("memberships");
  this.route("membership", { path: "membership/:id" });
  this.route("people");
  this.route("person", { path: "person/:id" });
});

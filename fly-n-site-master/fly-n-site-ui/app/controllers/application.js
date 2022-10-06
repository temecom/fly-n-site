"use strict";
import Controller from "@ember/controller";
import { action } from "@ember/object";
export default class ApplicationController extends Controller {
  collapsed = false;
  @action
  toggle() {
    this.collapsed = !this.collapsed;
  }
}

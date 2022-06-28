import { registerApplication, start } from "single-spa";

registerApplication(
  "testorg-mf01",
  () => System.import("@testorg/testorg-mf01"),
  () => location.pathname.startsWith("/")
);

start();

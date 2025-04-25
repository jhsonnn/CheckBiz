pluginManagement {
  repositories {
    google()
    mavenCentral()
    gradlePluginPortal()
  }
  includeBuild("../node_modules/@react-native/gradle-plugin")
}

dependencyResolutionManagement {
  repositories {
    google()
    mavenCentral()
  }
}

rootProject.name = "CheckBiz"
include(":app")

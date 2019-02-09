# Based on https://github.com/bazelbuild/examples/blob/master/tutorial/backend/BUILD

load("@io_bazel_rules_appengine//appengine:appengine.bzl", "appengine_war")

package(default_visibility = ["//visibility:public"])

appengine_war(
    name = "backend",
    data = [":webapp"],
    data_path = "webapp",
    jars = [":app_deploy.jar"],
)

# We only need a java_library, but create a java_binary because we need a bundle
# of all of the dependencies (a deploy jar) to pass to the appengine_war. So we
# specify a non-existant class as the main_class (as the "binary" will never be
# run directly, only used as a library).
java_binary(
    name = "app",
    srcs = glob(["src/**/*.java"]),
    main_class = "does.not.exist",
    deps = [
        "//src/apps/models/car:car_java_proto",
        "//src/apps/models/person:person_java_proto",
        "//src/apps/models/log:log_java_proto",
        "//src/apps/models/friend:friend_java_proto",
        "@io_bazel_rules_appengine//appengine:javax.servlet.api",
        "@com_google_protobuf//:protobuf_java",
        "@protobuf_java_format//jar",
        "@javax_servlet_javax_servlet_api//jar",
    ],
)

load("@io_bazel_rules_docker//java:image.bzl", "war_image")

war_image(
    name = "backend_image",
    srcs = glob(["src/**/*.java"]),
    deps = [
       "//src/apps/models/car:car_java_proto",
        "//src/apps/models/person:person_java_proto",
        "//src/apps/models/log:log_java_proto",
        "//src/apps/models/friend:friend_java_proto",
        "@io_bazel_rules_appengine//appengine:javax.servlet.api",
        "@com_google_protobuf//:protobuf_java",
        "@protobuf_java_format//jar",
        "@javax_servlet_javax_servlet_api//jar",
        "@javax_servlet_api//jar:jar",
    ]
)

load(
    "@io_bazel_rules_docker//container:container.bzl",
    "container_push"
)

container_push(
   name = "push",
   image = ":backend_image",
   format = "Docker",
   registry = "index.docker.io",
   repository = "thelgevold/angular-samples-api",
   tag = "1"
)
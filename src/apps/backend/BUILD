# Based on https://github.com/bazelbuild/examples/blob/master/tutorial/backend/BUILD

load("@io_bazel_rules_appengine//appengine:appengine.bzl", "appengine_war")

package(default_visibility = ["//visibility:public"])

appengine_war(
    name = "backend",
    data = [":webapp"],
    data_path = "webapp",
    jars = [":app_deploy.jar"],
)

filegroup(
    name = "webapp",
    srcs = glob(["webapp/**/*"]),
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
        "@io_bazel_rules_appengine//appengine:javax.servlet.api",
        "@com_google_protobuf//:protobuf_java",
        "@protobuf_java_format//jar"
    ],
)

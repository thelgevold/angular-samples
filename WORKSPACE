workspace(name = "angular_samples")

maven_jar(
    name = "protobuf_java_format",
    artifact = "com.googlecode.protobuf-java-format:protobuf-java-format:1.4",
    sha1 = "b8163b6940102c1808814471476f5293dfb419df",
)

http_archive(
    name = "com_google_protobuf",
    sha256 = "cef7f1b5a7c5fba672bec2a319246e8feba471f04dcebfe362d55930ee7c1c30",
    strip_prefix = "protobuf-3.5.0",
    urls = ["https://github.com/google/protobuf/archive/v3.5.0.zip"],
)

# java_lite_proto_library rules implicitly depend on @com_google_protobuf_javalite//:javalite_toolchain,
# which is the JavaLite proto runtime (base classes and common utilities).
http_archive(
    name = "com_google_protobuf_javalite",
    sha256 = "d8a2fed3708781196f92e1e7e7e713cf66804bd2944894401057214aff4f468e",
    strip_prefix = "protobuf-5e8916e881c573c5d83980197a6f783c132d4276",
    urls = ["https://github.com/google/protobuf/archive/5e8916e881c573c5d83980197a6f783c132d4276.zip"],
)

git_repository(
    name = "io_bazel_rules_appengine",
    remote = "https://github.com/bazelbuild/rules_appengine.git",
    commit = "ee5eec25f22782e03c5abda88f2c946e88d776f3"
)

BAZEL_BUILDTOOLS_VERSION = "49a6c199e3fbf5d94534b2771868677d3f9c6de9"

http_archive(
    name = "com_github_bazelbuild_buildtools",
    url = "https://github.com/bazelbuild/buildtools/archive/%s.zip" % BAZEL_BUILDTOOLS_VERSION,
    strip_prefix = "buildtools-%s" % BAZEL_BUILDTOOLS_VERSION,
    sha256 = "edf39af5fc257521e4af4c40829fffe8fba6d0ebff9f4dd69a6f8f1223ae047b",
)
http_archive(
    name = "angular",
    url = "https://github.com/angular/angular/archive/7.0.2.zip",
    strip_prefix = "angular-7.0.2",
)

http_archive(
    name = "rxjs",
    url = "https://registry.yarnpkg.com/rxjs/-/rxjs-6.3.3.tgz",
    strip_prefix = "package/src",
    sha256 = "72b0b4e517f43358f554c125e40e39f67688cd2738a8998b4a266981ed32f403",
)

# Rules for compiling sass
http_archive(
    name = "io_bazel_rules_sass",
    url = "https://github.com/bazelbuild/rules_sass/archive/1.14.1.zip",
    strip_prefix = "rules_sass-1.14.1",
)

# This local_repository rule is needed to prevent `bazel build ...` from
# drilling down into the @rxjs workspace BUILD files in node_modules/rxjs/src.
# In the future this will no longer be needed.
local_repository(
    name = "ignore_node_modules_rxjs",
    path = "node_modules/rxjs/src",
)

load("@angular//packages/bazel:package.bzl", "rules_angular_dependencies")

rules_angular_dependencies()

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")

node_repositories(
    node_version = "10.9.0",
    yarn_version = "1.9.2",
)

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock"
)

load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()
go_register_toolchains()

load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace", "check_rules_typescript_version")

ts_setup_workspace()

load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

sass_repositories()

load("@angular//:index.bzl", "ng_setup_workspace")

ng_setup_workspace()

load("@io_bazel_rules_appengine//appengine:java_appengine.bzl", "java_appengine_repositories")

java_appengine_repositories()


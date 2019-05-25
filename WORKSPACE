workspace(name = "angular_samples")

load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

git_repository(
    name = "bazel_skylib",
    remote = "https://github.com/bazelbuild/bazel-skylib.git",
    tag = "0.7.0"
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
    remote = "https://github.com/thelgevold/rules_appengine.git",
    commit = "d65baa509df874a0c360db581e2ee46772b5cbbe"
)

maven_jar(
    name = "protobuf_java_format",
    artifact = "com.googlecode.protobuf-java-format:protobuf-java-format:1.4",
    sha1 = "b8163b6940102c1808814471476f5293dfb419df",
)

maven_jar(
    name = "javax_servlet_javax_servlet_api",
    artifact = "javax.servlet:javax.servlet-api:3.1.0",
    repository = "http://repo.maven.apache.org/maven2",
)

http_archive(
      name = "io_bazel_rules_docker",
      sha256 = "aed1c249d4ec8f703edddf35cbe9dfaca0b5f5ea6e4cd9e83e99f3b0d1136c3d",
      strip_prefix = "rules_docker-0.7.0",
      urls = ["https://github.com/bazelbuild/rules_docker/archive/v0.7.0.tar.gz"],
  )

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "3a3efbf223f6de733475602844ad3a8faa02abda25ab8cfe1d1ed0db134887cf",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.27.12/rules_nodejs-0.27.12.tar.gz"],
)
git_repository(
    name = "com_google_protobuf",
    tag = "v3.6.1.3",
    remote = "https://github.com/protocolbuffers/protobuf.git"
)

# Rules for compiling sass
http_archive(
    name = "io_bazel_rules_sass",
    url = "https://github.com/bazelbuild/rules_sass/archive/1.14.1.zip",
    strip_prefix = "rules_sass-1.14.1",
)

http_archive(
    name = "build_bazel_rules_svelte",
    url = "https://github.com/thelgevold/rules_svelte/archive/0.5.zip",
    strip_prefix = "rules_svelte-0.5",
    sha256 = "b3008800db1c9c2a5f88201613de82f2d2a57ac65fb209d6f04ea2accfca9385"
) 

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")

node_repositories(
    node_version = "10.9.0",
    yarn_version = "1.12.1",
)

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
    data = [
      "//:angular-metadata.tsconfig.json",
    ],
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
install_bazel_dependencies()

load("@npm_bazel_karma//:package.bzl", "rules_karma_dependencies")

rules_karma_dependencies()

# Setup the rules_webtesting toolchain
load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")

web_test_repositories()

load("@npm_bazel_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()

load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

sass_repositories()

load("@io_bazel_rules_appengine//appengine:java_appengine.bzl", "java_appengine_repositories")

java_appengine_repositories()

load(
    "@io_bazel_rules_docker//java:image.bzl",
    _java_image_repos = "repositories",
)

_java_image_repos()

load(
    "@io_bazel_rules_docker//nodejs:image.bzl",
    _nodejs_image_repos = "repositories",
)

_nodejs_image_repos()

load("@build_bazel_rules_svelte//:defs.bzl", "rules_svelte_dependencies")
rules_svelte_dependencies()

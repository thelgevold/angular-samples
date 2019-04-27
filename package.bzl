load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

def angular_samples_dependencies():

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

  BAZEL_BUILDTOOLS_VERSION = "49a6c199e3fbf5d94534b2771868677d3f9c6de9"

  http_archive(
      name = "com_github_bazelbuild_buildtools",
      url = "https://github.com/bazelbuild/buildtools/archive/%s.zip" % BAZEL_BUILDTOOLS_VERSION,
      strip_prefix = "buildtools-%s" % BAZEL_BUILDTOOLS_VERSION,
      sha256 = "edf39af5fc257521e4af4c40829fffe8fba6d0ebff9f4dd69a6f8f1223ae047b",
  )

  # Rules for compiling sass
  http_archive(
      name = "io_bazel_rules_sass",
      url = "https://github.com/bazelbuild/rules_sass/archive/1.14.1.zip",
      strip_prefix = "rules_sass-1.14.1",
  )

  http_archive(
      name = "build_bazel_rules_svelte",
      url = "https://github.com/thelgevold/rules_svelte/archive/0.1.zip",
      strip_prefix = "rules_svelte-0.1",
      sha256 = "700a19d6d503500bd8dc190d7e29588c16867c2e163d7c8a883879ff602ef527"
  ) 

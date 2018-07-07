bazel build //src/main/java/build/buildfarm:buildfarm-worker && bazel-bin/src/main/java/build/buildfarm/buildfarm-worker /usr/bazel-buildfarm/examples/worker.config.example --root worker1 &
bazel build //src/main/java/build/buildfarm:buildfarm-worker && bazel-bin/src/main/java/build/buildfarm/buildfarm-worker /usr/bazel-buildfarm/examples/worker.config.example --root worker2 &
bazel build //src/main/java/build/buildfarm:buildfarm-worker && bazel-bin/src/main/java/build/buildfarm/buildfarm-worker /usr/bazel-buildfarm/examples/worker.config.example --root worker3 &
bazel build //src/main/java/build/buildfarm:buildfarm-worker && bazel-bin/src/main/java/build/buildfarm/buildfarm-worker /usr/bazel-buildfarm/examples/worker.config.example --root worker4 &
bazel build //src/main/java/build/buildfarm:buildfarm-worker && bazel-bin/src/main/java/build/buildfarm/buildfarm-worker /usr/bazel-buildfarm/examples/worker.config.example --root worker5 &
bazel build //src/main/java/build/buildfarm:buildfarm-worker && bazel-bin/src/main/java/build/buildfarm/buildfarm-worker /usr/bazel-buildfarm/examples/worker.config.example --root worker6 &
bazel build //src/main/java/build/buildfarm:buildfarm-worker && bazel-bin/src/main/java/build/buildfarm/buildfarm-worker /usr/bazel-buildfarm/examples/worker.config.example --root worker7 &
bazel build //src/main/java/build/buildfarm:buildfarm-worker && bazel-bin/src/main/java/build/buildfarm/buildfarm-worker /usr/bazel-buildfarm/examples/worker.config.example --root worker8 &

wait
echo all processes complete
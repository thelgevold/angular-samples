def _vendor_bundle(ctx):
  files = []
  concatArgs = ctx.actions.args()
  concatArgs.add(ctx.outputs.vendor)
  
  for dep in ctx.attr.deps:
    for file in dep.files:
      f = ctx.actions.declare_file(file.path)
      ctx.actions.expand_template(
        output = f,
        template =  file,
        substitutions = {}
      )
      files.append(f)
      concatArgs.add(f.path)

  ctx.action(
    executable = ctx.executable._concat,
    inputs = files,
    outputs = [ctx.outputs.vendor],
    arguments = [concatArgs]
  )

  argsUglify = ctx.actions.args()
  argsUglify.add(ctx.outputs.vendor.path)
  argsUglify.add_all(["--output", ctx.outputs.vendor_min.path])

  ctx.action(
      executable = ctx.executable._uglify,
      inputs = [ctx.outputs.vendor],
      outputs = [ctx.outputs.vendor_min],
      arguments = [argsUglify]
  )

vendor_bundle = rule(
  implementation = _vendor_bundle,
  attrs = {
    "deps": attr.label_list(allow_files = True),
    "_concat": attr.label(default=Label("//rules/vendor:concat"), executable=True, cfg="host", allow_files=True),
    "_uglify": attr.label(
        executable = True,
        cfg="host",
        default = Label("@build_bazel_rules_nodejs//internal/rollup:terser-wrapped")),
  },    
  outputs = {"vendor": "%{name}.js", "vendor_min": "%{name}.min.js"}
)
def _vendor_bundle(ctx):
  files = []
  concatArgs = ctx.actions.args()
  concatArgs.add(ctx.outputs.vendor)
  
  for dep in ctx.attr.deps:
    for file in dep.files.to_list():
      f = ctx.actions.declare_file(file.path)
      ctx.actions.expand_template(
        output = f,
        template =  file,
        substitutions = {}
      )
      files.append(f)
      concatArgs.add(f.path)

  ctx.actions.run(
    executable = ctx.executable._concat,
    inputs = files,
    outputs = [ctx.outputs.vendor],
    arguments = [concatArgs]
  )

vendor_bundle = rule(
  implementation = _vendor_bundle,
  attrs = {
    "deps": attr.label_list(allow_files = True),
    "_concat": attr.label(default=Label("//rules/vendor:concat"), executable=True, cfg="host", allow_files=True)
  },    
  outputs = {"vendor": "%{name}.js"}
)
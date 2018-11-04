load("@build_bazel_rules_nodejs//:internal/common/module_mappings.bzl", "get_module_mappings")

def _bundle(ctx):
  files = []
  root = ctx.file.entry_point.path.replace(ctx.file.entry_point.basename, "")

  for dep in ctx.attr.deps:
    for file in dep.files:
      if(file.is_source == False):
        if(file.path.endswith(".css")):
          css = ctx.actions.declare_file(ctx.outputs.css.basename)
          ctx.actions.expand_template(
            output = ctx.outputs.css,
            template =  file,
            substitutions = {}
          )
          files.append(css)
        else:
          files.append(file)
      if(file.is_source):
        f = ctx.actions.declare_file(file.path.replace(root, ""))
        ctx.actions.expand_template(
          output = f,
          template =  file,
          substitutions = {}
        )
        files.append(f)
      
  args = ctx.actions.args()
  args.add(["--input", ctx.bin_dir.path + "/" + ctx.file.entry_point.path])
  args.add(["--output.file", ctx.outputs.build.path])
  args.add(["--output.format", "iife"])
  
  ctx.action(
      executable = ctx.executable._rollup,
      inputs = files,
      outputs = [ctx.outputs.build],
      arguments = [args]
  )
 
bundle = rule(
  implementation = _bundle,
  attrs = {
    "deps": attr.label_list(),
    "entry_point": attr.label(allow_files = True, single_file = True),
    "_rollup": attr.label(
        executable = True,
        cfg="host",
        default = Label("@build_bazel_rules_nodejs//internal/rollup:rollup")),
    },
    outputs = {"build": "%{name}.es6.js", "css": "%{name}.css"}
)
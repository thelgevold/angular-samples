#Based on https://github.com/alexeagle/rules_nodejs/tree/webpack

load("@build_bazel_rules_nodejs//:internal/collect_es6_sources.bzl", "collect_es6_sources")

WEBPACK_BUNDLE_ATTRS = {
    "mode": attr.string(),
    "srcs": attr.label_list(
        doc = "JavaScript source files",
        allow_files = [".js"]),
    "deps": attr.label_list(
        doc = "Other targets that produce JavaScript, e.g. `ts_library`"),
    "entry_points": attr.string_list(
        doc = "Entry point JS files, relative to the workspace root",
        mandatory = True),
    "_webpack": attr.label(
        default=Label("//src/apps/demo-app/webpack:webpack_bundler"),
        executable=True,
        cfg="host"),
    "_webpack_config_template": attr.label(
        default = Label("//src/apps/demo-app/webpack:webpack.config.tmpl.js"),
        allow_single_file = True),
}

def write_config(ctx, label, template, output_dir, entry_point, root_dir = None):
  config_file = ctx.actions.declare_file("_%s_webpack.config.js" % label.name)
  if not root_dir:
    build_file_dirname = "/".join(ctx.build_file_path.split("/")[:-1])
    root_dir = "/".join([ctx.bin_dir.path, build_file_dirname, ctx.label.name + ".es6"])
  
  entryPoint = ""
  for e in ctx.attr.entry_points:
    entryPoint += "'{0}':`{1}/{2}/{3}`,".format(e, "${process.cwd()}", root_dir, e)
  
  ctx.actions.expand_template(
      template = template,
      output = config_file,
      substitutions = {
          "TMPL_root_dir": root_dir,
          "TMPL_workspace": ctx.workspace_name,
          "TMPL_entry_point": entryPoint,
          "TMPL_mode": ctx.attr.mode,
          "TMPL_out_dir": "path: `{0}/{1}`".format("${process.cwd()}", output_dir.path)
      },
  )
  return config_file

def run_webpack(actions, executable, label, sources, output_dir, config):
  webpack_args = actions.args()
  webpack_args.add(["--config", config.path])
  webpack_args.add(["--log-level", "error"])
  actions.run(
    progress_message = "Webpack bundling %s" % label,
    inputs = sources + [config],
    outputs = [output_dir],
    executable = executable._webpack,
    arguments = [webpack_args],
    # Don't print warnings to the user if there's an update - the version is
    # outside the user's control.
    env = {"NO_UPDATE_NOTIFIER": "1"},
  )

def _webpack_bundle(ctx):
  output_dir = ctx.actions.declare_directory(ctx.label.name)
  config = write_config(
      ctx,
      ctx.label,
      ctx.file._webpack_config_template,
      output_dir,
      ctx.attr.entry_points)
  run_webpack(
      ctx.actions,
      ctx.executable,
      ctx.label,
      collect_es6_sources(ctx),
      output_dir,
      config)
  return [DefaultInfo(files = depset([output_dir]))]

webpack_bundle = rule(
  implementation = _webpack_bundle,
  attrs = WEBPACK_BUNDLE_ATTRS,
 # outputs = {"main": "main-prod.js"}
)
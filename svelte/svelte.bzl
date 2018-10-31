
SvelteFiles = provider("transitive_sources")

def get_transitive_srcs(srcs, deps):
    
  return depset(
      srcs,
      transitive = [dep[SvelteFiles].transitive_sources for dep in deps],
  )

SVELTE_ATTRS = {
  "entry_point": attr.label(allow_files = True, single_file = True),
  "deps": attr.label_list(),
  "srcs": attr.label_list(allow_files = True),
  "_svelte": attr.label(
        default=Label("//svelte"),
        executable=True,
        cfg="host"),
}

def _svelte(ctx):
  args = ctx.actions.args()
  args.add(["compile", ctx.file.entry_point.path])
  args.add(["-o", ctx.outputs.build.path])

  ctx.actions.run( 
      executable = ctx.executable._svelte,
      outputs = [ctx.outputs.build],
      inputs = [ctx.file.entry_point],
      arguments = [args]
  )

  trans_srcs = get_transitive_srcs(ctx.files.srcs, ctx.attr.deps) + [ctx.outputs.build]
  
  return [
      SvelteFiles(transitive_sources = trans_srcs),
      DefaultInfo(files = trans_srcs),
  ]

svelte = rule(
  implementation = _svelte,
  attrs = SVELTE_ATTRS,
  outputs = {
      "build": "%{name}.js"
  }
)
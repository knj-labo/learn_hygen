---
to: "<%= have_hooks ? `${abs_path}/`${component_name}/`use${component_name}.ts` : null %>"
---
import { useState } from "react"
type Use<%= component_name %>ReturnType = {
 handleClick: () => void
}

export function use<%= component_name %>(): Use<%= component_name %>ReturnType {
  const [value, setValue] = useState<string>("");
  const handleClick = () =>
  return {}
}
import {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuCheckboxItem,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuShortcut,
  } from "@/components/ui/context-menu"
  import { useState } from "react"
  
  function Example() {
    const [checked, setChecked] = useState(false)
    const [radioValue, setRadioValue] = useState("option1")
  
    return (
      <ContextMenu>
        <ContextMenuTrigger>Right-click me</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked={checked} onCheckedChange={setChecked}>
            Toggle Option
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>Choose Option</ContextMenuLabel>
          <ContextMenuRadioGroup value={radioValue} onValueChange={setRadioValue}>
            <ContextMenuRadioItem value="option1">Option 1</ContextMenuRadioItem>
            <ContextMenuRadioItem value="option2">Option 2</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    )
  }
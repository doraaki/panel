import { ClickableIcon, ClickableIconView } from "./icon";
import * as p from "@bokehjs/core/properties";


export class ToggleIconView extends ClickableIconView {
  model: ToggleIcon;

  public *controls() { }

  click(): void {
    if (this.model.disabled) {
      return;
    }
    super.click();
    this.model.value = !this.model.value;
  }
}

export namespace ToggleIcon {
  export type Attrs = p.AttrsOf<Props>;
  export type Props = ClickableIcon.Props & {};
}

export interface ToggleIcon extends ToggleIcon.Attrs { }

export class ToggleIcon extends ClickableIcon {
  properties: ToggleIcon.Props;
  declare __view_type__: ToggleIconView
  static __module__ = "panel.models.icon";

  constructor(attrs?: Partial<ToggleIcon.Attrs>) {
    super(attrs);
  }

  static {
    this.prototype.default_view = ToggleIconView;

    this.define<ToggleIcon.Props>(({ }) => ({}));
  }
}

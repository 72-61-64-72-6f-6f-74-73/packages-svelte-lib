import type { CallbackPromise, CallbackPromiseGeneric, ICb, ICbGOpt, ICbOpt, IClOpt, IGl, IGlOpt, ILabelFieldsOpt, ILabelOpt, ILabelOptFieldsOpt, ILyOpt, ILyOptTs } from "./client";
import type { GlyphKey, GlyphWeight, IGlyph } from "./ui";

export type ITabsBasisList = {
    icon: GlyphKey;
    classes?: string;
    active_weight?: GlyphWeight;
    indicator?: string
    callback: CallbackPromiseGeneric<number>;
};

export type ITabsBasis = {
    list: ITabsBasisList[];
    blur?: boolean;
    tab_active: number;
    app_layout: string;
};

export type IFormField = {
    validate: RegExp;
    charset: RegExp;
    validate_keypress?: boolean;
};

export type IInputFormBasis = IClOpt & ILyOptTs & ICbGOpt<{ val: string; pass: boolean; }> & {
    classes_wrap?: string;
    id: string;
    placeholder?: string;
    label?: string;
    hidden?: boolean;
    validate?: RegExp;
    sync?: boolean;
    field: IFormField;
    notify_inline?: {
        glyph: GlyphKey | IGlyph;
    };
};

export type IInputSelectBasisOption = {
    value: string;
    label?: string;
    disabled?: boolean;
    selected?: boolean;
};

export type IInputSelectBasis = IClOpt & ILyOptTs & ICbGOpt<string> & {
    classes_wrap?: string;
    id?: string;
    label?: string;
    hidden?: boolean;
    hide_arrows?: boolean;
    sync?: boolean;
    loading?: boolean;
    options: IInputSelectBasisOption[];
};


export type IEnvelopeBasis = ILyOpt &
    IClOpt & IEnvelopeKind & {
        visible: boolean;
        close: CallbackPromise;
        transparent?: boolean;
    };

export type IEnvelopeKind = (
    {
        titled: IEnvelopeTitledBasis;
    });

export type IEnvelopeTitledBasis = {
    hide_border?: boolean;
    previous?: ILabelOptFieldsOpt;
    heading?: ILabelOptFieldsOpt;
    submit?: ICb & (ILabelFieldsOpt | IGl) & {
        valid?: boolean;
    }
};

export type INavBasis = {
    prev: ICbOpt & {
        label?: string;
        route: string;
    };
    title?: {
        label: string;
    };
    option?: ICb & IGlOpt & ILabelOpt & {
        loading?: boolean;
    };
};


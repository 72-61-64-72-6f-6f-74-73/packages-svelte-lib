<script lang="ts">
    import Glyph from "$lib/ui/glyph.svelte";
    import type { ThemeLayer } from "@radroots/theme";
    import {
        fmt_cl,
        get_label_classes,
        type ITrellisKindDisplayValue,
    } from "..";

    export let basis: ITrellisKindDisplayValue;
    export let layer: ThemeLayer;
    export let hide_active: boolean;
    export let end_offset: boolean = false;
</script>

<button
    class={`z-10 flex flex-grow justify-end ${end_offset ? `pr-[22px]` : ``}`}
    on:click|preventDefault={async (ev) => {
        if (basis && basis.callback) await basis.callback(ev);
    }}
>
    {#if `icon` in basis}
        <Glyph
            basis={{
                classes:
                    basis.icon.classes ||
                    `text-layer-${layer}-glyph-shade ${hide_active ? `` : `group-active:text-layer-${layer}-glyph_a`}`,
                key: basis.icon.key,
                weight: `bold`,
                dim: `sm`,
            }}
        />
    {:else if basis.label}
        {#if `value` in basis.label}
            <p
                class={`${fmt_cl(basis.label.classes)} font-sans text-trellisLine line-clamp-1 ${get_label_classes(layer, basis.label.kind, hide_active)}  transition-all`}
            >
                {basis.label.value}
            </p>
        {/if}
    {/if}
</button>

<script lang="ts">
    import type { ThemeLayer } from "@radroots/theme";
    import { fmt_trellis, sleep, type ITrellisBasisTouch } from "..";
    import TrellisEnd from "./trellis_end.svelte";
    import TrellisRowDisplayValue from "./trellis_row_display_value.svelte";
    import TrellisRowLabel from "./trellis_row_label.svelte";

    export let basis: ITrellisBasisTouch;
    export let layer: ThemeLayer;
    export let hide_border_t: boolean;
    export let hide_border_b: boolean;
    export let hide_active: boolean;
</script>

<div class={`flex flex-row flex-grow overflow-x-hidden`}>
    <div
        class={`${fmt_trellis(hide_border_b, hide_border_t)} flex flex-row h-full w-full justify-center items-center border-t-line border-layer-${layer}-surface-edge/40 transition-all`}
    >
        <button
            class={`relative group flex flex-row h-line w-full pr-[2px] justify-between items-center transition-all`}
            on:click={async (ev) => {
                await sleep(100);
                if (basis.callback) await basis.callback(ev);
            }}
        >
            <div
                class={`flex flex-row h-full justify-between items-center ${basis.end ? `pr-2` : ``}`}
            >
                <TrellisRowLabel basis={basis.label} {layer} {hide_active} />
                {#if basis.display}
                    <TrellisRowDisplayValue
                        basis={{
                            ...basis.display,
                            callback: async (ev) => {
                                //@todo
                            },
                        }}
                        {layer}
                        {hide_active}
                        end_offset={!!basis.end}
                    />
                {/if}
            </div>
            {#if basis.end}
                <TrellisEnd basis={basis.end} {layer} {hide_active} />
            {/if}
        </button>
    </div>
</div>

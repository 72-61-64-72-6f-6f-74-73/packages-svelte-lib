<script lang="ts">
    import { fmt_cl, type ICb, type IClOpt, type ILabel } from "$lib";

    export let basis: ILabel & {
        notify?: IClOpt & ICb & ILabel;
    };
    $: basis = basis;
</script>

<div class={`flex flex-col w-trellis_line gap-1 justify-start items-center`}>
    <div
        class={`flex flex-row h-5 w-full px-2 gap-2 justify-start items-center`}
    >
        {#if `value` in basis.label}
            <p
                class={`${fmt_cl(basis.label.classes)} font-sans font-[400] uppercase text-layer-2-glyph text-sm`}
            >
                {basis.label.value}
            </p>
        {/if}
        {#if basis.notify}
            <div
                class={`${fmt_cl(basis.notify.classes)} flex flex-row justify-start items-center fade-in transition-all`}
            >
                <button
                    class={`flex flex-row justify-center items-center`}
                    on:click={async () => {
                        await basis.notify?.callback();
                    }}
                >
                    {#if `value` in basis.notify.label}
                        <p
                            class={`${fmt_cl(basis.notify.label.classes)} font-sans font-[500] uppercase text-layer-2-glyph/80 text-xs`}
                        >
                            {basis.notify.label.value}
                        </p>
                    {/if}
                </button>
            </div>
        {/if}
    </div>
    <slot />
</div>

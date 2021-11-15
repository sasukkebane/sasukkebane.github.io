<script>
    import { Spinner, Row, Col, Button, Input, FormGroup } from "sveltestrap";
    import { page } from "$app/stores";
    import {
        getEpisodeUrl,
        getEpisodeTitle,
        getNextNonFiller,
        isFillerTitle,
        // getOpeningStart,
        // getOpeningDuration,
        getEndingDuration,
    } from "$lib/dattebane/shippuuden";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    let loaded = false;
    let videoElem = null;
    let videoDuration;
    let videoCurrentTime;

    $: episode = Number($page.query.get("episode"));
    $: hd = $page.query.get("hd") == "true";
    $: autoNext = $page.query.get("autoNext") == "true";
    $: skipFiller = $page.query.get("skipFiller") == "true";
    // $: skipOpening = $page.query.get("skipOpening") == "true";
    $: skipEnding = $page.query.get("skipEnding") == "true";

    $: episodeTitle = getEpisodeTitle(episode);
    $: episodeUrl = getEpisodeUrl(episode, hd);
    // $: openingStart = getOpeningStart(episode);
    // $: openingEnd = openingStart + getOpeningDuration(episode);
    $: endingStart = videoDuration - getEndingDuration(episode);

    function gotoOverriding(name, value) {
        const params = new URLSearchParams($page.query);
        if (name) params.set(name, value);
        goto("/watch?" + params.toString(), { keepfocus: true });
    }

    function onVideoUpdate() {
        if (skipFiller && isFillerTitle(episodeTitle)) {
            const next = getNextNonFiller(episode);
            console.log("Auto-skipped filler to " + next);
            gotoOverriding("episode", next);
        }

        // if (
        //     skipOpening &&
        //     openingStart !== undefined &&
        //     openingEnd !== undefined
        // ) {
        //     if (videoCurrentTime >= openingStart) {
        //         if (videoCurrentTime <= openingEnd) {
        //             console.log("Auto-skipped openning");
        //             videoCurrentTime = openingEnd + 0.01;
        //         }
        //     }
        // }
        if (skipEnding && endingStart !== undefined) {
            if (videoCurrentTime >= endingStart) {
                console.log("Auto-skipped ending");
                videoCurrentTime = videoDuration;
            }
        }
        if (autoNext && episode < 500) {
            if (videoCurrentTime >= videoDuration - 0.01) {
                const next = skipFiller
                    ? getNextNonFiller(episode)
                    : episode + 1;
                console.log("Auto-skipped episode to " + next);
                gotoOverriding("episode", next);
            }
        }
    }

    onMount(() => {
        const params = new URLSearchParams($page.query);
        if (!params.has("episode")) params.set("episode", 1);
        if (!params.has("hd")) params.set("hd", true);
        if (!params.has("autoNext")) params.set("autoNext", true);
        if (!params.has("skipFiller")) params.set("skipFiller", true);
        // if (!params.has("skipOpening")) params.set("skipOpening", true);
        if (!params.has("skipEnding")) params.set("skipEnding", true);
        if (params.toString() != $page.query.toString())
            goto("/watch?" + params.toString());
        loaded = true;
    });
</script>

{#if !loaded}
    <div class="mt-3 mx-auto text-center text-light">
        <Spinner />
    </div>
{/if}

<div
    class="mt-3 mx-auto bg-dark text-light text-center p-2 rounded-3"
    style="max-width: 800px;"
    hidden={!loaded}
>
    <h5>Episódio {episode}</h5>
    <h6>{episodeTitle}</h6>

    <video
        width="100%"
        height="100%"
        controls
        autoplay
        src={episodeUrl}
        class="bg-black"
        bind:this={videoElem}
        bind:duration={videoDuration}
        bind:currentTime={videoCurrentTime}
        on:timeupdate={onVideoUpdate}
    >
        <track kind="captions" />
        Your browser does not support the video tag.
    </video>

    <Row class="pt-1 g-2">
        {#if episode > 1}
            <Col>
                <Button
                    color="primary"
                    class="w-100"
                    on:click={() => {
                        gotoOverriding("episode", episode - 1);
                    }}>← Episódio {episode - 1}</Button
                >
            </Col>
        {/if}
        <Col sm="auto">
            <Button
                class="w-100"
                on:click={() => {
                    videoElem.currentTime -= 60;
                }}>« 60 sec</Button
            >
        </Col>
        <Col sm="auto">
            <Button
                class="w-100"
                on:click={() => {
                    videoElem.currentTime -= 10;
                }}>‹ 10 sec</Button
            >
        </Col>
        <Col sm="auto">
            <Button
                class="w-100"
                on:click={() => {
                    videoElem.currentTime += 10;
                }}>10 sec ›</Button
            >
        </Col>
        <Col sm="auto">
            <Button
                class="w-100"
                on:click={() => {
                    videoElem.currentTime += 60;
                }}>1 min »</Button
            >
        </Col>
        {#if episode < 500}
            <Col>
                <Button
                    color="primary"
                    class="w-100"
                    on:click={() => {
                        gotoOverriding("episode", episode + 1);
                    }}>Episódio {episode + 1} →</Button
                >
            </Col>
        {/if}
    </Row>

    <div class="mt-2 d-flex flex-wrap justify-content-center gap-2">
        <Input
            type="checkbox"
            label="HD"
            bind:checked={hd}
            on:change={() => {
                gotoOverriding("hd", !hd);
            }}
        />
        <Input
            type="checkbox"
            label="Avanço automático"
            bind:checked={autoNext}
            on:change={() => {
                gotoOverriding("autoNext", !autoNext);
            }}
        />
        <Input
            type="checkbox"
            label="Pular fillers"
            bind:checked={skipFiller}
            on:change={() => {
                gotoOverriding("skipFiller", !skipFiller);
            }}
        />
        <!-- <Input
            type="checkbox"
            label="Pular abertura"
            bind:checked={skipOpening}
            on:change={() => {
                gotoOverriding("skipOpening", !skipOpening);
            }}
        /> -->
        <Input
            type="checkbox"
            label="Pular últimos 2 minutos"
            bind:checked={skipEnding}
            on:change={() => {
                gotoOverriding("skipEnding", !skipEnding);
            }}
        />
    </div>
    <a class="small text-center" href="/">Voltar ao índice</a>
</div>

<style>
</style>

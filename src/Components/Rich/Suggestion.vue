<template>
    <a
        v-if="uri"
        class="suggestion"
        target="_blank"
        rel="noopener noreferrer"
        :href="uri">
        {{title}}
    </a>
    <button v-else class="suggestion">{{title}}</button>
</template>

<style lang="sass" scoped>
@import '@/Style/Mixins'

.suggestion
    @include reset
    padding: 8px 8px
    border-radius: 40px
    border: 1px solid var(--border)
    color: var(--text)
    cursor: pointer
    margin-right: 6px
    font-weight: 250
    margin-bottom: 6px
    background-color: rgb(220,220,220)
    box-shadow: 0 1px 3px 0 rgba(60,64,67,0.302), 0 4px 8px 3px rgba(60,64,67,0.149)
    opacity: 1

.suggestion[href]
    color: var(--accent)
    text-decoration: none
    border: 1px solid var(--border)
</style>

<script>
export default {
    name: 'Suggestion',
    props: {
        uri: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        }
    }
}
</script>
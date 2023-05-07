<script lang="ts">
    import type { HomeModel } from '../../common/types/pageModels';

    export let model: HomeModel;
</script>

<div>
    {#each model.forumCategories as category (category.id)}
        <div>
            <h2>{category.name}</h2>
            {#each category.forums as forum (forum.id)}
                <div>
                    <h3><a href="/forum/{forum.id}">{forum.name}</a></h3>
                    <p>{forum.description}</p>
                </div>
            {/each}
        </div>
    {/each}
</div>

<template>
  <div class="friends-panel">
    <article class="panel">
        <p class="panel-heading">
            Friends
        </p>
        <p class="ptabs">
            <a>Top Friends</a>
            <a>Groups</a>
            <a>Chat</a>
            <!-- <a>Sources</a> -->
            <!-- <a>Forks</a> -->
        </p>
        <div class="panel-block">
            <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Search">
            <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            </p>
        </div>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            <!-- bulma -->
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            <!-- marksheet -->
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            <!-- minireset.css -->
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            <!-- jgthms.github.io -->
        </a>
    </article>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.friends-panel {
    margin: 20px;
}
p.panel-heading {
    background-color: rgba(255, 185, 8, 0.7);
    font-family: 'Bebas Neue', sans-serif;
    font-size: 25px;
    color: black;
    padding: 10px 20px;
    font-weight: 400;
}
p.ptabs {
    text-align: center;
    margin-top: 10px;
}
.friends-panel a {
    margin: 10px 5px;
    color: black;
    font-family: 'Montserrat', sans-serif;
    padding-left: 10px;
    padding-right: 10px;

}
</style>
<template>
  <div class="wrap">
    <div class="search">
      <input
        type="text"
        class="searchTerm"
        placeholder="搜索歌单"
        v-model="searchKey"
      />
      <button type="submit" class="searchButton">
        <i
          class="fa fa-search"
          @click="searchResult"
        ></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKey: "",
    };
  },
  methods: {
    searchResult() {
      //this.$router.push('/index/search')
      this.$router.push({
        path: "search",
        query: { searchKey: encodeURI(this.searchKey) },
      });
    }
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

.search {
  width: 60%;
  position: absolute;
  top: -46vh;
  left: -25vw;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: #00b4cc;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap {
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
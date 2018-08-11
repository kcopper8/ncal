<template>
  <header>
    <h1>NCal</h1>
    <nav>
        <ul>
          <li><router-link to="/">홈</router-link></li>
          <li><router-link to="/members">멤버 관리</router-link></li>
          <li><router-link to="/goods">상품 관리</router-link></li>
          <li><router-link to="/calculate">정산</router-link></li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
  text-align: center;
}
ul {
  display: flex;
}
li {
  list-style-type: none;
  padding: 10px;
}
</style>

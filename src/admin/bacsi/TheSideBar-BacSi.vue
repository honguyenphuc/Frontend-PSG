<template>
    <aside class="aside-main">
        <div class="avatar">
            <!-- <img src="" alt="" /> -->

            <div class="name-avatar">
                <h4>{{ userName }}</h4>
                <span style="padding-right: 10px">Bác Sĩ</span>
                <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false"></button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Logout</a>
                </div>
            </div>
        </div>
        <div class="Add-main">
            <ul>
                <li>
                    <router-link :to="`/bacsi/LichLamViec/${userID}`">
                        <h4>
                            Xem Lịch Làm Việc
                            <span class="arrow">></span>
                        </h4>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <h4>
                            Lịch Khám
                            <span class="arrow">></span>
                        </h4>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <h4>
                            Tạo Toa Thuốc
                            <span class="arrow">></span>
                        </h4>
                    </router-link>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            userID: (state) => state.userID,
            userName: (state) => state.userName,
        }),
    },
    async created() {
    },
}
</script>

<style>
.aside-main {
    margin-top: 0px;
}

.name-avatar {
    padding-left: 20px;
}

.Add-main ul {
    list-style: none;
    /* Remove default list styling */
    padding: 0;
    /* Remove default padding */
}

.Add-main li {
    padding: 10px 0;
    /* Add padding for spacing */
    /* Center text */
}
</style>
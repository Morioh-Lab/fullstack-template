<template>
    <div class="main-navbar navbar-expand-md navbar-light bg-white">

        <button class="btn hidden-md-up" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>


        <img src="https://i.imgur.com/QTZ8pU1.png" title="Morioh" class="navbar-logo hidden-md-up" style="height: 36px;">


        <button class="btn hidden-md-up" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/about" class="nav-link">About</router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/services" class="nav-link">Services</router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/contact" class="nav-link">Contact US</router-link>
                </li>

            </ul>


            <ul class="navbar-nav my-2 my-lg-0">


                <li class="nav-item mr-5">
                    <a href="#" class="nav-icon font-2xl">
                        <!-- <i class="fas fa-chart-pie"></i> -->
                        <i class="mdi mdi-view-dashboard-outline"></i>
                    </a>
                </li>

                <li class="nav-item mr-5">
                    <a class="nav-icon font-2xl" href="#">
                        <i class="mdi mdi-bell-ring-outline"></i>
                    </a>
                </li>

                <li class="nav-item mr-5">
                    <a href="#" class="nav-icon font-2xl rounded-circle">
                        <!-- <i class="fas fa-cog"></i> -->
                        <i class="mdi mdi-settings-outline"></i>
                    </a>
                </li>

                <li class="nav-item mr-5 dropdown">
                    <a href="#" class="nav-icon avatar rounded-circle" id="PJXN7R" role="button" data-toggle="dropdown" aria-expanded="false">
                        <img src="https://i.imgur.com/ROPF2fQ.png">
                    </a>

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="PJXN7R">
                        <a class="dropdown-item" href="#">
                            <i class="mdi mdi-account-circle-outline"></i> My Account</a>
                        <a class="dropdown-item" href="#"><i class="mdi mdi-lock-outline"></i> Change password</a>
                        <a class="dropdown-item" href="#"><i class="mdi mdi-settings-outline"></i>Settings</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#"><i class="mdi mdi-exit-to-app"></i> Logout</a>
                    </div>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-icon font-2xl rounded-circle" href="#" id="WJIK6R" role="button" data-toggle="dropdown" aria-expanded="false">
                        <!-- <i class="fas fa-ellipsis-h"></i> -->

                        <i class="mdi mdi-dots-horizontal"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="WJIK6R">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>
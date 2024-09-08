import AuthService from "@/core/auth/AuthService";
import type { ILoginDTO } from "@/core/auth/ILoginDTO";
import { defineStore } from "pinia";
import { useImagesStore } from "./imagesStore";
import type { IRegisterDTO } from "@/core/auth/IRegisterDTO";

export const useAuthStore = defineStore("authStore", {
    state: () => {
        return {
            username: "" as string,
            role: "" as string,
            isAuthorized: false as boolean,
            authService: new AuthService,
            loginFormIsOpened: false as boolean,
            imagesStore: useImagesStore(),
            registerFormIsOpened: false as boolean
          };
    },
  
    actions: {
      async login(loginDTO: ILoginDTO): Promise<void> {
        try {
            const response = await this.authService.login(loginDTO)
            console.log(response)
            this.role = response.roles
            this.username = response.username
            this.isAuthorized = true
            this.switchLoginForm()
            this.imagesStore.getImages()
        } catch (error) {
            console.error(error)
        }
      },
      async register(registerDTO: IRegisterDTO): Promise<void> {
        try {
            const response = await this.authService.register(registerDTO)
            console.log(response)
            this.switchLoginForm()
            this.switchRegisterForm()
        } catch (error) {
            console.error(error)
        }
      },
      async logout(): Promise<void> {
        try {
            const response = await this.authService.logout()
            this.isAuthorized = false
            console.log(response)
        } catch (error) {
            console.error(error)
        }
      },
      switchLoginForm() {
        this.loginFormIsOpened = !this.loginFormIsOpened
      },

      switchRegisterForm() {
        this.registerFormIsOpened = !this.registerFormIsOpened
      },
    },
  });
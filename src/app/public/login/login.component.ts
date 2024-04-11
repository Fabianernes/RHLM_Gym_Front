import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { UserService } from "../../service/user/user.service";
import { RolesDto } from "../../interface/roles.dto";
import { UserDto } from "../../interface/user.dto";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: UntypedFormGroup;

  get userInfo(): UserDto {
    const userSaved = localStorage.getItem('userData');
    return JSON.parse(userSaved || '{}');
  }

  get isLogged(): boolean {
    return !!localStorage.getItem('userData');
  }

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.buildForm();
    this.randombg(); // Llamar a la función randombg() al inicializar el componente
  }

  buildForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      passwd: ['', Validators.required],
    });
  }

  randombg() {
    var random = Math.floor(Math.random() * 2) + 0;
    var bigSize = [
      "url('../../../assets/rhlm_fondo.jpg')", 
      "url('../../../assets/emmanuel.jpg')",
    ];
    var element = document.getElementById("right");
    if (element) {
      element.style.backgroundImage = bigSize[random];
    } else {
      console.error("No se encontró ningún elemento con el ID 'right'.");
    }
  }

  login() {
    if (this.form.valid) {
      this.userService.login(this.form.value)
        .subscribe((res: any) => {
          if (res) {
            const roles = res.roles?.map((rol: RolesDto) => rol.nombreRol)
            localStorage.setItem('userData', JSON.stringify(res));
            localStorage.setItem('roles', roles);
            if (this.userInfo.userValido != 1) {
              this.router.navigate(['user/changePsswd'])
            } else {
              if (this.userInfo.roles[0].nombreRol === 'Miembro') {
                this.router.navigate(['Miembro/Home'])
              } else if (this.userInfo.roles[0].nombreRol === 'Admin') {
                this.router.navigate(['Admin/Home'])
              }
            }
          }
        })
    }
  }
}

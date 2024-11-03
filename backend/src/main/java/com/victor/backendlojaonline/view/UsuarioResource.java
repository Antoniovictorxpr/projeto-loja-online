package com.victor.backendlojaonline.view;

import com.victor.backendlojaonline.controller.UsuarioController;
import com.victor.backendlojaonline.model.entity.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioResource {

    @Autowired
    private UsuarioController controller;

    @GetMapping("{cpf}")
    public Usuario getUsuario(@PathVariable("cpf")String cpf) throws Exception {
        return this.controller.getUsuario(cpf);
    }

    @GetMapping
    public List<Usuario> getAll(){
        return  this.controller.getAll();
    }
    @PostMapping
    public Usuario save(@RequestBody Usuario usuario) throws Exception {
        return  this.controller.save(usuario);
    }

    @PutMapping
    public Usuario update(@RequestBody Usuario usuario) throws Exception {
        return  this.controller.save(usuario);
    }

    @DeleteMapping("{cpf}")
    public void delete(@PathVariable("cpf") String cpf) throws Exception {
        this.controller.delete(cpf);
    }
}


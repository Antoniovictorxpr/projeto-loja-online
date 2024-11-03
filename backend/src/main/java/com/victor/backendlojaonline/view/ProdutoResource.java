package com.victor.backendlojaonline.view;

;
import com.victor.backendlojaonline.controller.ProdutoController;
import com.victor.backendlojaonline.model.entity.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoResource {

    @Autowired
    private ProdutoController controller;

    @GetMapping("{codigo}")
    public Produto getUsuario(@PathVariable("codigo")String codigo) throws Exception {
        return this.controller.getProduto(codigo);
    }

    @GetMapping
    public List<Produto> getAll(){
        return  this.controller.getAll();
    }
    @PostMapping
    public Produto save(@RequestBody Produto produto) throws Exception {
        return  this.controller.save(produto);
    }

    @PutMapping
    public Produto update(@RequestBody Produto produto) throws Exception {
        return  this.controller.save(produto);
    }

    @DeleteMapping("{codigo}")
    public void delete(@PathVariable("codigo") String codigo) throws Exception {
        this.controller.delete(codigo);
    }
}


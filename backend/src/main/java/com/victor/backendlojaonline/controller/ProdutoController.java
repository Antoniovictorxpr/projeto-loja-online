package com.victor.backendlojaonline.controller;


import com.victor.backendlojaonline.model.entity.Produto;
import com.victor.backendlojaonline.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

@Service
public class ProdutoController {
    @Autowired
    private ProdutoRepository repository;

    public Produto getProduto(String codigo) throws Exception {
        Produto produto = this.repository.findByCodigo(codigo);
        if (produto == null){
            throw new Exception("Produto nao encontrado");
        }

        return  produto;
    }

    public List<Produto> getAll(){
        return  this.repository.findAll();
    }

    public Produto save(Produto produto) throws Exception {
        if (!StringUtils.hasLength(produto.getCodigo())){
            throw new Exception("Codigo Vazio");
        }

        if (!StringUtils.hasLength(produto.getNome())){
            throw new Exception("Nome Vazio");
        }



        return  this.repository.save(produto);
    }
    public void delete(String codigo) throws Exception {
        this.repository.delete(getProduto(codigo));
    }




}

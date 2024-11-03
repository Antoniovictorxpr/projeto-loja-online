package com.victor.backendlojaonline.repository;

import com.victor.backendlojaonline.model.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, String> {

    Produto findByCodigo(String codigo);

}

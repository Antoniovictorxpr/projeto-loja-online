package com.victor.backendlojaonline.repository;

import com.victor.backendlojaonline.model.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, String> {

    Usuario findByCpf(String cpf);

}

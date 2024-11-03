package com.victor.backendlojaonline.model.entity;
import com.victor.backendlojaonline.model.entity.enums.TipoProduto;
import com.victor.backendlojaonline.model.entity.enums.Unidade;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "produto")
@Getter
@Setter
public class Produto {
    @Id
    @Column(name = "codigo", nullable = false, length = 100)
    private String codigo;

    @Column(name = "nome", nullable = false, length = 200)
    private String nome;

    @Column(name = "preco_pago")
    private Double precoPago;

    @Column(name = "preco_final")
    private Double precoFinal;

    @Column(name = "quantidade")
    private Integer quantidade;

    @Column(name = "unidade")
    @Enumerated(EnumType.ORDINAL)
    private Unidade unidade;

    @Column(name = "tipo_produto")
    @Enumerated(EnumType.ORDINAL)
    private TipoProduto tipoProduto;

    @Column(name = "descricao", length = 500)
    private String descricao;






}

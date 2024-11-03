package com.victor.backendlojaonline.model.entity.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;


@Getter
@AllArgsConstructor
public enum TipoProduto {

    PECA_BIKE (1),
    PECA_MOTO (2),
    PECA_CARRO (3);


    private Integer codigo;

}

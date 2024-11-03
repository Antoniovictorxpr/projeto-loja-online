package com.victor.backendlojaonline.model.entity.enums;


import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Unidade {
    KG (1),
    METRO (2),
    UNITARIO(3);

    private Integer codigo;
}


	CREATE TABLE usuario (
    cpf CHAR(16) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT,
    email VARCHAR(100) UNIQUE,
    imagem INT
		
);

CREATE TABLE produto (
    codigo VARCHAR(100) PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    preco_pago NUMERIC NOT NULL,
    preco_final NUMERIC,
    quantidade NUMERIC NOT NULL,
    unidade INT,
    tipo_produto INT,
    condicao INT,
    descricao VARCHAR(500),
    marca VARCHAR(100),
    cor VARCHAR(100),
    largura NUMERIC,
    peso NUMERIC,
    peso_liquido NUMERIC,
    peso_bruto NUMERIC,
    altura NUMERIC,
    material VARCHAR,
    profundidade NUMERIC,
    tamanho_disponiveis VARCHAR(100),
    volumes NUMERIC,
    minino NUMERIC,
    maximo NUMERIC,
    posicao_estoque VARCHAR(300),
    status_produtos VARCHAR(100),
    local_armazenamento VARCHAR(100),
    entrada DATE
);


INSERT INTO usuario
    (cpf, nome, idade, email)
VALUES
    ('53872136054', 'Fufia', '9','fufia@gmail.com'),
    ('87341167025', 'Panda', '8','panda@email.com'),
    ('01522604049', 'Agenor', '5','snow@gmail.com');

select * from usuario;

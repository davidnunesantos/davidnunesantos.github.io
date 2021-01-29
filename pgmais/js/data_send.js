class DataSend {
    id_mensagem;
    ddd;
    celular;
    operadora;
    horario_envio;
    mensagem;
    celular_completo;
    motivo_bloqueio;

    constructor(id_mensagem, ddd, celular, operadora, horario_envio, mensagem) {
        this.id_mensagem      = id_mensagem;
        this.ddd              = ddd;
        this.celular          = celular;
        this.operadora        = operadora;
        this.horario_envio    = dayjs('2021-01-01 ' + horario_envio, 'HH:mm:ss');
        this.mensagem         = mensagem;
        this.celular_completo = ddd + celular;
        this.motivo_bloqueio  = '';
    }
}
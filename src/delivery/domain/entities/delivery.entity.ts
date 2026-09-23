import { Entity } from "../../../shared/domain/entites/entity.js"
import { DeliveryStatus } from "../enum/elivery-status.enum.js"


export type DeliveryProps = {
    status: DeliveryStatus
    createdAt: Date
    driverId: string | null
}

export class DeliveryEntity extends Entity<DeliveryProps> {
    constructor(
        props: DeliveryProps,
        id?: string,
    ) {
        super(
            {
                ...props,
                status: props.status ?? DeliveryStatus.PENDING,
                createdAt: props.createdAt ?? new Date(),
            },
            id,
        );
    }



    get status(): DeliveryStatus {
        return this.props.status
    }

    get driveId() {
        return this.props.driverId
    }

    public assignDriver(driverId: string): void {
        this.props.driverId = driverId
    }


    public startDelivery(driverId: string): void {
        if (this.props.status !== DeliveryStatus.PENDING) {
            throw new Error('Apenas entregas pendentes podem ser iniciadas')
        }
        this.props.driverId = driverId
        this.props.status = DeliveryStatus.IN_PROGRESS

    }

    public completdDelivery(): void {
        if (this.props.status !== DeliveryStatus.IN_PROGRESS) {
            throw new Error('Apenas entregas iniciadas podem ser concluidas')
        }

        this.props.status = DeliveryStatus.DELIVERED
    }

    public completedDelivery(): void {
        if (this.props.status !== DeliveryStatus.DELIVERED) {
            throw new Error('Apenas entregas iniciadas podem ser canceladas')
        }

        this.props.status = DeliveryStatus.COMPLETED
    }
}

//faz sentido o driver ter o delivery id?
//não faz sentido pq um driver pode ter varios delivery 
//quero que o status mude quando um driver autenticado pegar a emtrega 
//como fazer isso?Faz sentido fazer no update?
//pensei em não ter o update no meu delivery, mas ter uma função(não sei em qual documento) que 
// se driveid null, o status seria PENDING 
//se driveid não estiver vazio IN_PROGRESS
//cria uma lista de tarefas dem diver que entra os itens de delivery que ele tem 
//essa tarefa pode ser concluida ou não(treu ou false), e opcional no caso de ter tarefa 
//se a tarefa estiver concluida muda pra delivered
//quando o pedido sera cancelado?  
//


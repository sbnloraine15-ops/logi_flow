import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DeliveryModel = runtime.Types.Result.DefaultSelection<Prisma.$DeliveryPayload>;
export type AggregateDelivery = {
    _count: DeliveryCountAggregateOutputType | null;
    _min: DeliveryMinAggregateOutputType | null;
    _max: DeliveryMaxAggregateOutputType | null;
};
export type DeliveryMinAggregateOutputType = {
    id: string | null;
    status: string | null;
    createdAt: Date | null;
    driverId: string | null;
};
export type DeliveryMaxAggregateOutputType = {
    id: string | null;
    status: string | null;
    createdAt: Date | null;
    driverId: string | null;
};
export type DeliveryCountAggregateOutputType = {
    id: number;
    status: number;
    createdAt: number;
    driverId: number;
    _all: number;
};
export type DeliveryMinAggregateInputType = {
    id?: true;
    status?: true;
    createdAt?: true;
    driverId?: true;
};
export type DeliveryMaxAggregateInputType = {
    id?: true;
    status?: true;
    createdAt?: true;
    driverId?: true;
};
export type DeliveryCountAggregateInputType = {
    id?: true;
    status?: true;
    createdAt?: true;
    driverId?: true;
    _all?: true;
};
export type DeliveryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryWhereInput;
    orderBy?: Prisma.DeliveryOrderByWithRelationInput | Prisma.DeliveryOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DeliveryCountAggregateInputType;
    _min?: DeliveryMinAggregateInputType;
    _max?: DeliveryMaxAggregateInputType;
};
export type GetDeliveryAggregateType<T extends DeliveryAggregateArgs> = {
    [P in keyof T & keyof AggregateDelivery]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDelivery[P]> : Prisma.GetScalarType<T[P], AggregateDelivery[P]>;
};
export type DeliveryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryWhereInput;
    orderBy?: Prisma.DeliveryOrderByWithAggregationInput | Prisma.DeliveryOrderByWithAggregationInput[];
    by: Prisma.DeliveryScalarFieldEnum[] | Prisma.DeliveryScalarFieldEnum;
    having?: Prisma.DeliveryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeliveryCountAggregateInputType | true;
    _min?: DeliveryMinAggregateInputType;
    _max?: DeliveryMaxAggregateInputType;
};
export type DeliveryGroupByOutputType = {
    id: string;
    status: string;
    createdAt: Date | null;
    driverId: string | null;
    _count: DeliveryCountAggregateOutputType | null;
    _min: DeliveryMinAggregateOutputType | null;
    _max: DeliveryMaxAggregateOutputType | null;
};
export type GetDeliveryGroupByPayload<T extends DeliveryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeliveryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeliveryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeliveryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeliveryGroupByOutputType[P]>;
}>>;
export type DeliveryWhereInput = {
    AND?: Prisma.DeliveryWhereInput | Prisma.DeliveryWhereInput[];
    OR?: Prisma.DeliveryWhereInput[];
    NOT?: Prisma.DeliveryWhereInput | Prisma.DeliveryWhereInput[];
    id?: Prisma.StringFilter<"Delivery"> | string;
    status?: Prisma.StringFilter<"Delivery"> | string;
    createdAt?: Prisma.DateTimeNullableFilter<"Delivery"> | Date | string | null;
    driverId?: Prisma.StringNullableFilter<"Delivery"> | string | null;
    driver?: Prisma.XOR<Prisma.DriverNullableScalarRelationFilter, Prisma.DriverWhereInput> | null;
};
export type DeliveryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    driverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    driver?: Prisma.DriverOrderByWithRelationInput;
};
export type DeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DeliveryWhereInput | Prisma.DeliveryWhereInput[];
    OR?: Prisma.DeliveryWhereInput[];
    NOT?: Prisma.DeliveryWhereInput | Prisma.DeliveryWhereInput[];
    status?: Prisma.StringFilter<"Delivery"> | string;
    createdAt?: Prisma.DateTimeNullableFilter<"Delivery"> | Date | string | null;
    driverId?: Prisma.StringNullableFilter<"Delivery"> | string | null;
    driver?: Prisma.XOR<Prisma.DriverNullableScalarRelationFilter, Prisma.DriverWhereInput> | null;
}, "id">;
export type DeliveryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    driverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DeliveryCountOrderByAggregateInput;
    _max?: Prisma.DeliveryMaxOrderByAggregateInput;
    _min?: Prisma.DeliveryMinOrderByAggregateInput;
};
export type DeliveryScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeliveryScalarWhereWithAggregatesInput | Prisma.DeliveryScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeliveryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeliveryScalarWhereWithAggregatesInput | Prisma.DeliveryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Delivery"> | string;
    status?: Prisma.StringWithAggregatesFilter<"Delivery"> | string;
    createdAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Delivery"> | Date | string | null;
    driverId?: Prisma.StringNullableWithAggregatesFilter<"Delivery"> | string | null;
};
export type DeliveryCreateInput = {
    id: string;
    status: string;
    createdAt?: Date | string | null;
    driver?: Prisma.DriverCreateNestedOneWithoutDeliveryInput;
};
export type DeliveryUncheckedCreateInput = {
    id: string;
    status: string;
    createdAt?: Date | string | null;
    driverId?: string | null;
};
export type DeliveryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    driver?: Prisma.DriverUpdateOneWithoutDeliveryNestedInput;
};
export type DeliveryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DeliveryCreateManyInput = {
    id: string;
    status: string;
    createdAt?: Date | string | null;
    driverId?: string | null;
};
export type DeliveryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DeliveryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DeliveryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
};
export type DeliveryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
};
export type DeliveryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
};
export type DeliveryListRelationFilter = {
    every?: Prisma.DeliveryWhereInput;
    some?: Prisma.DeliveryWhereInput;
    none?: Prisma.DeliveryWhereInput;
};
export type DeliveryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DeliveryCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.DeliveryCreateWithoutDriverInput, Prisma.DeliveryUncheckedCreateWithoutDriverInput> | Prisma.DeliveryCreateWithoutDriverInput[] | Prisma.DeliveryUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.DeliveryCreateOrConnectWithoutDriverInput | Prisma.DeliveryCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.DeliveryCreateManyDriverInputEnvelope;
    connect?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
};
export type DeliveryUncheckedCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.DeliveryCreateWithoutDriverInput, Prisma.DeliveryUncheckedCreateWithoutDriverInput> | Prisma.DeliveryCreateWithoutDriverInput[] | Prisma.DeliveryUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.DeliveryCreateOrConnectWithoutDriverInput | Prisma.DeliveryCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.DeliveryCreateManyDriverInputEnvelope;
    connect?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
};
export type DeliveryUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.DeliveryCreateWithoutDriverInput, Prisma.DeliveryUncheckedCreateWithoutDriverInput> | Prisma.DeliveryCreateWithoutDriverInput[] | Prisma.DeliveryUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.DeliveryCreateOrConnectWithoutDriverInput | Prisma.DeliveryCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.DeliveryUpsertWithWhereUniqueWithoutDriverInput | Prisma.DeliveryUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.DeliveryCreateManyDriverInputEnvelope;
    set?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    disconnect?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    delete?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    connect?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    update?: Prisma.DeliveryUpdateWithWhereUniqueWithoutDriverInput | Prisma.DeliveryUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.DeliveryUpdateManyWithWhereWithoutDriverInput | Prisma.DeliveryUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.DeliveryScalarWhereInput | Prisma.DeliveryScalarWhereInput[];
};
export type DeliveryUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.DeliveryCreateWithoutDriverInput, Prisma.DeliveryUncheckedCreateWithoutDriverInput> | Prisma.DeliveryCreateWithoutDriverInput[] | Prisma.DeliveryUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.DeliveryCreateOrConnectWithoutDriverInput | Prisma.DeliveryCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.DeliveryUpsertWithWhereUniqueWithoutDriverInput | Prisma.DeliveryUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.DeliveryCreateManyDriverInputEnvelope;
    set?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    disconnect?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    delete?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    connect?: Prisma.DeliveryWhereUniqueInput | Prisma.DeliveryWhereUniqueInput[];
    update?: Prisma.DeliveryUpdateWithWhereUniqueWithoutDriverInput | Prisma.DeliveryUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.DeliveryUpdateManyWithWhereWithoutDriverInput | Prisma.DeliveryUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.DeliveryScalarWhereInput | Prisma.DeliveryScalarWhereInput[];
};
export type DeliveryCreateWithoutDriverInput = {
    id: string;
    status: string;
    createdAt?: Date | string | null;
};
export type DeliveryUncheckedCreateWithoutDriverInput = {
    id: string;
    status: string;
    createdAt?: Date | string | null;
};
export type DeliveryCreateOrConnectWithoutDriverInput = {
    where: Prisma.DeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeliveryCreateWithoutDriverInput, Prisma.DeliveryUncheckedCreateWithoutDriverInput>;
};
export type DeliveryCreateManyDriverInputEnvelope = {
    data: Prisma.DeliveryCreateManyDriverInput | Prisma.DeliveryCreateManyDriverInput[];
};
export type DeliveryUpsertWithWhereUniqueWithoutDriverInput = {
    where: Prisma.DeliveryWhereUniqueInput;
    update: Prisma.XOR<Prisma.DeliveryUpdateWithoutDriverInput, Prisma.DeliveryUncheckedUpdateWithoutDriverInput>;
    create: Prisma.XOR<Prisma.DeliveryCreateWithoutDriverInput, Prisma.DeliveryUncheckedCreateWithoutDriverInput>;
};
export type DeliveryUpdateWithWhereUniqueWithoutDriverInput = {
    where: Prisma.DeliveryWhereUniqueInput;
    data: Prisma.XOR<Prisma.DeliveryUpdateWithoutDriverInput, Prisma.DeliveryUncheckedUpdateWithoutDriverInput>;
};
export type DeliveryUpdateManyWithWhereWithoutDriverInput = {
    where: Prisma.DeliveryScalarWhereInput;
    data: Prisma.XOR<Prisma.DeliveryUpdateManyMutationInput, Prisma.DeliveryUncheckedUpdateManyWithoutDriverInput>;
};
export type DeliveryScalarWhereInput = {
    AND?: Prisma.DeliveryScalarWhereInput | Prisma.DeliveryScalarWhereInput[];
    OR?: Prisma.DeliveryScalarWhereInput[];
    NOT?: Prisma.DeliveryScalarWhereInput | Prisma.DeliveryScalarWhereInput[];
    id?: Prisma.StringFilter<"Delivery"> | string;
    status?: Prisma.StringFilter<"Delivery"> | string;
    createdAt?: Prisma.DateTimeNullableFilter<"Delivery"> | Date | string | null;
    driverId?: Prisma.StringNullableFilter<"Delivery"> | string | null;
};
export type DeliveryCreateManyDriverInput = {
    id: string;
    status: string;
    createdAt?: Date | string | null;
};
export type DeliveryUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DeliveryUncheckedUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DeliveryUncheckedUpdateManyWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DeliverySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    createdAt?: boolean;
    driverId?: boolean;
    driver?: boolean | Prisma.Delivery$driverArgs<ExtArgs>;
}, ExtArgs["result"]["delivery"]>;
export type DeliverySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    createdAt?: boolean;
    driverId?: boolean;
    driver?: boolean | Prisma.Delivery$driverArgs<ExtArgs>;
}, ExtArgs["result"]["delivery"]>;
export type DeliverySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    createdAt?: boolean;
    driverId?: boolean;
    driver?: boolean | Prisma.Delivery$driverArgs<ExtArgs>;
}, ExtArgs["result"]["delivery"]>;
export type DeliverySelectScalar = {
    id?: boolean;
    status?: boolean;
    createdAt?: boolean;
    driverId?: boolean;
};
export type DeliveryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "status" | "createdAt" | "driverId", ExtArgs["result"]["delivery"]>;
export type DeliveryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    driver?: boolean | Prisma.Delivery$driverArgs<ExtArgs>;
};
export type DeliveryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    driver?: boolean | Prisma.Delivery$driverArgs<ExtArgs>;
};
export type DeliveryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    driver?: boolean | Prisma.Delivery$driverArgs<ExtArgs>;
};
export type $DeliveryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Delivery";
    objects: {
        driver: Prisma.$DriverPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        status: string;
        createdAt: Date | null;
        driverId: string | null;
    }, ExtArgs["result"]["delivery"]>;
    composites: {};
};
export type DeliveryGetPayload<S extends boolean | null | undefined | DeliveryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeliveryPayload, S>;
export type DeliveryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeliveryCountAggregateInputType | true;
};
export interface DeliveryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Delivery'];
        meta: {
            name: 'Delivery';
        };
    };
    findUnique<T extends DeliveryFindUniqueArgs>(args: Prisma.SelectSubset<T, DeliveryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DeliveryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DeliveryFindFirstArgs>(args?: Prisma.SelectSubset<T, DeliveryFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DeliveryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DeliveryFindManyArgs>(args?: Prisma.SelectSubset<T, DeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DeliveryCreateArgs>(args: Prisma.SelectSubset<T, DeliveryCreateArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DeliveryCreateManyArgs>(args?: Prisma.SelectSubset<T, DeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DeliveryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DeliveryDeleteArgs>(args: Prisma.SelectSubset<T, DeliveryDeleteArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DeliveryUpdateArgs>(args: Prisma.SelectSubset<T, DeliveryUpdateArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DeliveryDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DeliveryUpdateManyArgs>(args: Prisma.SelectSubset<T, DeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DeliveryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DeliveryUpsertArgs>(args: Prisma.SelectSubset<T, DeliveryUpsertArgs<ExtArgs>>): Prisma.Prisma__DeliveryClient<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DeliveryCountArgs>(args?: Prisma.Subset<T, DeliveryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeliveryCountAggregateOutputType> : number>;
    aggregate<T extends DeliveryAggregateArgs>(args: Prisma.Subset<T, DeliveryAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAggregateType<T>>;
    groupBy<T extends DeliveryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeliveryGroupByArgs['orderBy'];
    } : {
        orderBy?: DeliveryGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DeliveryFieldRefs;
}
export interface Prisma__DeliveryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    driver<T extends Prisma.Delivery$driverArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Delivery$driverArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DeliveryFieldRefs {
    readonly id: Prisma.FieldRef<"Delivery", 'String'>;
    readonly status: Prisma.FieldRef<"Delivery", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Delivery", 'DateTime'>;
    readonly driverId: Prisma.FieldRef<"Delivery", 'String'>;
}
export type DeliveryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where: Prisma.DeliveryWhereUniqueInput;
};
export type DeliveryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where: Prisma.DeliveryWhereUniqueInput;
};
export type DeliveryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where?: Prisma.DeliveryWhereInput;
    orderBy?: Prisma.DeliveryOrderByWithRelationInput | Prisma.DeliveryOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveryScalarFieldEnum | Prisma.DeliveryScalarFieldEnum[];
};
export type DeliveryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where?: Prisma.DeliveryWhereInput;
    orderBy?: Prisma.DeliveryOrderByWithRelationInput | Prisma.DeliveryOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveryScalarFieldEnum | Prisma.DeliveryScalarFieldEnum[];
};
export type DeliveryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where?: Prisma.DeliveryWhereInput;
    orderBy?: Prisma.DeliveryOrderByWithRelationInput | Prisma.DeliveryOrderByWithRelationInput[];
    cursor?: Prisma.DeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveryScalarFieldEnum | Prisma.DeliveryScalarFieldEnum[];
};
export type DeliveryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeliveryCreateInput, Prisma.DeliveryUncheckedCreateInput>;
};
export type DeliveryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DeliveryCreateManyInput | Prisma.DeliveryCreateManyInput[];
};
export type DeliveryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    data: Prisma.DeliveryCreateManyInput | Prisma.DeliveryCreateManyInput[];
    include?: Prisma.DeliveryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DeliveryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeliveryUpdateInput, Prisma.DeliveryUncheckedUpdateInput>;
    where: Prisma.DeliveryWhereUniqueInput;
};
export type DeliveryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DeliveryUpdateManyMutationInput, Prisma.DeliveryUncheckedUpdateManyInput>;
    where?: Prisma.DeliveryWhereInput;
    limit?: number;
};
export type DeliveryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeliveryUpdateManyMutationInput, Prisma.DeliveryUncheckedUpdateManyInput>;
    where?: Prisma.DeliveryWhereInput;
    limit?: number;
    include?: Prisma.DeliveryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DeliveryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where: Prisma.DeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeliveryCreateInput, Prisma.DeliveryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DeliveryUpdateInput, Prisma.DeliveryUncheckedUpdateInput>;
};
export type DeliveryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
    where: Prisma.DeliveryWhereUniqueInput;
};
export type DeliveryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryWhereInput;
    limit?: number;
};
export type Delivery$driverArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where?: Prisma.DriverWhereInput;
};
export type DeliveryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeliverySelect<ExtArgs> | null;
    omit?: Prisma.DeliveryOmit<ExtArgs> | null;
    include?: Prisma.DeliveryInclude<ExtArgs> | null;
};

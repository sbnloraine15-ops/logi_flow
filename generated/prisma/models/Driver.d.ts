import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DriverModel = runtime.Types.Result.DefaultSelection<Prisma.$DriverPayload>;
export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null;
    _min: DriverMinAggregateOutputType | null;
    _max: DriverMaxAggregateOutputType | null;
};
export type DriverMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    authorized: boolean | null;
    password: string | null;
    createdAt: Date | null;
};
export type DriverMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    authorized: boolean | null;
    password: string | null;
    createdAt: Date | null;
};
export type DriverCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    authorized: number;
    password: number;
    createdAt: number;
    _all: number;
};
export type DriverMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    authorized?: true;
    password?: true;
    createdAt?: true;
};
export type DriverMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    authorized?: true;
    password?: true;
    createdAt?: true;
};
export type DriverCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    authorized?: true;
    password?: true;
    createdAt?: true;
    _all?: true;
};
export type DriverAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithRelationInput | Prisma.DriverOrderByWithRelationInput[];
    cursor?: Prisma.DriverWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DriverCountAggregateInputType;
    _min?: DriverMinAggregateInputType;
    _max?: DriverMaxAggregateInputType;
};
export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
    [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDriver[P]> : Prisma.GetScalarType<T[P], AggregateDriver[P]>;
};
export type DriverGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithAggregationInput | Prisma.DriverOrderByWithAggregationInput[];
    by: Prisma.DriverScalarFieldEnum[] | Prisma.DriverScalarFieldEnum;
    having?: Prisma.DriverScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DriverCountAggregateInputType | true;
    _min?: DriverMinAggregateInputType;
    _max?: DriverMaxAggregateInputType;
};
export type DriverGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    authorized: boolean | null;
    password: string;
    createdAt: Date | null;
    _count: DriverCountAggregateOutputType | null;
    _min: DriverMinAggregateOutputType | null;
    _max: DriverMaxAggregateOutputType | null;
};
export type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DriverGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DriverGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DriverGroupByOutputType[P]>;
}>>;
export type DriverWhereInput = {
    AND?: Prisma.DriverWhereInput | Prisma.DriverWhereInput[];
    OR?: Prisma.DriverWhereInput[];
    NOT?: Prisma.DriverWhereInput | Prisma.DriverWhereInput[];
    id?: Prisma.StringFilter<"Driver"> | string;
    name?: Prisma.StringFilter<"Driver"> | string;
    email?: Prisma.StringFilter<"Driver"> | string;
    authorized?: Prisma.BoolNullableFilter<"Driver"> | boolean | null;
    password?: Prisma.StringFilter<"Driver"> | string;
    createdAt?: Prisma.DateTimeNullableFilter<"Driver"> | Date | string | null;
    delivery?: Prisma.DeliveryListRelationFilter;
};
export type DriverOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    authorized?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    delivery?: Prisma.DeliveryOrderByRelationAggregateInput;
};
export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DriverWhereInput | Prisma.DriverWhereInput[];
    OR?: Prisma.DriverWhereInput[];
    NOT?: Prisma.DriverWhereInput | Prisma.DriverWhereInput[];
    name?: Prisma.StringFilter<"Driver"> | string;
    email?: Prisma.StringFilter<"Driver"> | string;
    authorized?: Prisma.BoolNullableFilter<"Driver"> | boolean | null;
    password?: Prisma.StringFilter<"Driver"> | string;
    createdAt?: Prisma.DateTimeNullableFilter<"Driver"> | Date | string | null;
    delivery?: Prisma.DeliveryListRelationFilter;
}, "id">;
export type DriverOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    authorized?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DriverCountOrderByAggregateInput;
    _max?: Prisma.DriverMaxOrderByAggregateInput;
    _min?: Prisma.DriverMinOrderByAggregateInput;
};
export type DriverScalarWhereWithAggregatesInput = {
    AND?: Prisma.DriverScalarWhereWithAggregatesInput | Prisma.DriverScalarWhereWithAggregatesInput[];
    OR?: Prisma.DriverScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DriverScalarWhereWithAggregatesInput | Prisma.DriverScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Driver"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Driver"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Driver"> | string;
    authorized?: Prisma.BoolNullableWithAggregatesFilter<"Driver"> | boolean | null;
    password?: Prisma.StringWithAggregatesFilter<"Driver"> | string;
    createdAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null;
};
export type DriverCreateInput = {
    id: string;
    name: string;
    email: string;
    authorized?: boolean | null;
    password: string;
    createdAt?: Date | string | null;
    delivery?: Prisma.DeliveryCreateNestedManyWithoutDriverInput;
};
export type DriverUncheckedCreateInput = {
    id: string;
    name: string;
    email: string;
    authorized?: boolean | null;
    password: string;
    createdAt?: Date | string | null;
    delivery?: Prisma.DeliveryUncheckedCreateNestedManyWithoutDriverInput;
};
export type DriverUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    authorized?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivery?: Prisma.DeliveryUpdateManyWithoutDriverNestedInput;
};
export type DriverUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    authorized?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivery?: Prisma.DeliveryUncheckedUpdateManyWithoutDriverNestedInput;
};
export type DriverCreateManyInput = {
    id: string;
    name: string;
    email: string;
    authorized?: boolean | null;
    password: string;
    createdAt?: Date | string | null;
};
export type DriverUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    authorized?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DriverUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    authorized?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DriverNullableScalarRelationFilter = {
    is?: Prisma.DriverWhereInput | null;
    isNot?: Prisma.DriverWhereInput | null;
};
export type DriverCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    authorized?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DriverMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    authorized?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DriverMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    authorized?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DriverCreateNestedOneWithoutDeliveryInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutDeliveryInput, Prisma.DriverUncheckedCreateWithoutDeliveryInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutDeliveryInput;
    connect?: Prisma.DriverWhereUniqueInput;
};
export type DriverUpdateOneWithoutDeliveryNestedInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutDeliveryInput, Prisma.DriverUncheckedCreateWithoutDeliveryInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutDeliveryInput;
    upsert?: Prisma.DriverUpsertWithoutDeliveryInput;
    disconnect?: Prisma.DriverWhereInput | boolean;
    delete?: Prisma.DriverWhereInput | boolean;
    connect?: Prisma.DriverWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DriverUpdateToOneWithWhereWithoutDeliveryInput, Prisma.DriverUpdateWithoutDeliveryInput>, Prisma.DriverUncheckedUpdateWithoutDeliveryInput>;
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type DriverCreateWithoutDeliveryInput = {
    id: string;
    name: string;
    email: string;
    authorized?: boolean | null;
    password: string;
    createdAt?: Date | string | null;
};
export type DriverUncheckedCreateWithoutDeliveryInput = {
    id: string;
    name: string;
    email: string;
    authorized?: boolean | null;
    password: string;
    createdAt?: Date | string | null;
};
export type DriverCreateOrConnectWithoutDeliveryInput = {
    where: Prisma.DriverWhereUniqueInput;
    create: Prisma.XOR<Prisma.DriverCreateWithoutDeliveryInput, Prisma.DriverUncheckedCreateWithoutDeliveryInput>;
};
export type DriverUpsertWithoutDeliveryInput = {
    update: Prisma.XOR<Prisma.DriverUpdateWithoutDeliveryInput, Prisma.DriverUncheckedUpdateWithoutDeliveryInput>;
    create: Prisma.XOR<Prisma.DriverCreateWithoutDeliveryInput, Prisma.DriverUncheckedCreateWithoutDeliveryInput>;
    where?: Prisma.DriverWhereInput;
};
export type DriverUpdateToOneWithWhereWithoutDeliveryInput = {
    where?: Prisma.DriverWhereInput;
    data: Prisma.XOR<Prisma.DriverUpdateWithoutDeliveryInput, Prisma.DriverUncheckedUpdateWithoutDeliveryInput>;
};
export type DriverUpdateWithoutDeliveryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    authorized?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DriverUncheckedUpdateWithoutDeliveryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    authorized?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DriverCountOutputType = {
    delivery: number;
};
export type DriverCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    delivery?: boolean | DriverCountOutputTypeCountDeliveryArgs;
};
export type DriverCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverCountOutputTypeSelect<ExtArgs> | null;
};
export type DriverCountOutputTypeCountDeliveryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeliveryWhereInput;
};
export type DriverSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    authorized?: boolean;
    password?: boolean;
    createdAt?: boolean;
    delivery?: boolean | Prisma.Driver$deliveryArgs<ExtArgs>;
    _count?: boolean | Prisma.DriverCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["driver"]>;
export type DriverSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    authorized?: boolean;
    password?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["driver"]>;
export type DriverSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    authorized?: boolean;
    password?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["driver"]>;
export type DriverSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    authorized?: boolean;
    password?: boolean;
    createdAt?: boolean;
};
export type DriverOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "authorized" | "password" | "createdAt", ExtArgs["result"]["driver"]>;
export type DriverInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    delivery?: boolean | Prisma.Driver$deliveryArgs<ExtArgs>;
    _count?: boolean | Prisma.DriverCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DriverIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DriverIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DriverPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Driver";
    objects: {
        delivery: Prisma.$DeliveryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        authorized: boolean | null;
        password: string;
        createdAt: Date | null;
    }, ExtArgs["result"]["driver"]>;
    composites: {};
};
export type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DriverPayload, S>;
export type DriverCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DriverCountAggregateInputType | true;
};
export interface DriverDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Driver'];
        meta: {
            name: 'Driver';
        };
    };
    findUnique<T extends DriverFindUniqueArgs>(args: Prisma.SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DriverFindFirstArgs>(args?: Prisma.SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DriverFindManyArgs>(args?: Prisma.SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DriverCreateArgs>(args: Prisma.SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DriverCreateManyArgs>(args?: Prisma.SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DriverDeleteArgs>(args: Prisma.SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DriverUpdateArgs>(args: Prisma.SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DriverDeleteManyArgs>(args?: Prisma.SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DriverUpdateManyArgs>(args: Prisma.SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DriverUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DriverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DriverUpsertArgs>(args: Prisma.SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DriverCountArgs>(args?: Prisma.Subset<T, DriverCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DriverCountAggregateOutputType> : number>;
    aggregate<T extends DriverAggregateArgs>(args: Prisma.Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>;
    groupBy<T extends DriverGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DriverGroupByArgs['orderBy'];
    } : {
        orderBy?: DriverGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DriverFieldRefs;
}
export interface Prisma__DriverClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    delivery<T extends Prisma.Driver$deliveryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Driver$deliveryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DriverFieldRefs {
    readonly id: Prisma.FieldRef<"Driver", 'String'>;
    readonly name: Prisma.FieldRef<"Driver", 'String'>;
    readonly email: Prisma.FieldRef<"Driver", 'String'>;
    readonly authorized: Prisma.FieldRef<"Driver", 'Boolean'>;
    readonly password: Prisma.FieldRef<"Driver", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Driver", 'DateTime'>;
}
export type DriverFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where: Prisma.DriverWhereUniqueInput;
};
export type DriverFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where: Prisma.DriverWhereUniqueInput;
};
export type DriverFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithRelationInput | Prisma.DriverOrderByWithRelationInput[];
    cursor?: Prisma.DriverWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DriverScalarFieldEnum | Prisma.DriverScalarFieldEnum[];
};
export type DriverFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithRelationInput | Prisma.DriverOrderByWithRelationInput[];
    cursor?: Prisma.DriverWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DriverScalarFieldEnum | Prisma.DriverScalarFieldEnum[];
};
export type DriverFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithRelationInput | Prisma.DriverOrderByWithRelationInput[];
    cursor?: Prisma.DriverWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DriverScalarFieldEnum | Prisma.DriverScalarFieldEnum[];
};
export type DriverCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DriverCreateInput, Prisma.DriverUncheckedCreateInput>;
};
export type DriverCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DriverCreateManyInput | Prisma.DriverCreateManyInput[];
};
export type DriverCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    data: Prisma.DriverCreateManyInput | Prisma.DriverCreateManyInput[];
};
export type DriverUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DriverUpdateInput, Prisma.DriverUncheckedUpdateInput>;
    where: Prisma.DriverWhereUniqueInput;
};
export type DriverUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DriverUpdateManyMutationInput, Prisma.DriverUncheckedUpdateManyInput>;
    where?: Prisma.DriverWhereInput;
    limit?: number;
};
export type DriverUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DriverUpdateManyMutationInput, Prisma.DriverUncheckedUpdateManyInput>;
    where?: Prisma.DriverWhereInput;
    limit?: number;
};
export type DriverUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where: Prisma.DriverWhereUniqueInput;
    create: Prisma.XOR<Prisma.DriverCreateInput, Prisma.DriverUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DriverUpdateInput, Prisma.DriverUncheckedUpdateInput>;
};
export type DriverDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where: Prisma.DriverWhereUniqueInput;
};
export type DriverDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DriverWhereInput;
    limit?: number;
};
export type Driver$deliveryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DriverDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
};

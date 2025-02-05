import { type SchemaTypeDefinition } from 'sanity'
import { Category } from './category'
import { product } from './products'
import { order } from './order'
import {  review } from './rating'
import { transaction } from './transaction'
import { returns } from './return'
import { customer } from './customer'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product ,Category ,order,review,transaction,returns, customer],
}

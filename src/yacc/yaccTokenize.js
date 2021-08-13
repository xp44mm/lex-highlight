import { tokenizeConfig } from '../tokenizeConfig'
import { yaccTokenizeOnce } from './yaccTokenizeOnce'

export const yaccTokenize = tokenizeConfig(yaccTokenizeOnce)


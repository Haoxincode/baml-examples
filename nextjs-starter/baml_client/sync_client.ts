/*************************************************************************************************

Welcome to Baml! To use this generated code, please run one of the following:

$ npm install @boundaryml/baml
$ yarn add @boundaryml/baml
$ pnpm add @boundaryml/baml

*************************************************************************************************/

// This file was generated by BAML: do not edit it. Instead, edit the BAML
// files and re-generate this code.
//
/* eslint-disable */
// tslint:disable
// @ts-nocheck
// biome-ignore format: autogenerated code
import { BamlRuntime, FunctionResult, BamlCtxManager, BamlSyncStream, Image, ClientRegistry, createBamlValidationError, BamlValidationError } from "@boundaryml/baml"
import { Checked, Check } from "./types"
import {Answer, BookAnalysis, CharacterDescription, Citation, Context, Document, Education, Experience, Guide, Ingredient, Link, Message, PartIngredient, PartSteps, Person, PopularityOverTime, Query, Ranking, Recipe, Reply, Resume, Score, Spells, Tweet, Van, VanSideAnalysis, VehicleSideResponse, Visibility, WordCount, Category, ReplyType, Role, VehicleSide} from "./types"
import TypeBuilder from "./type_builder"
import { DO_NOT_USE_DIRECTLY_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_CTX, DO_NOT_USE_DIRECTLY_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_RUNTIME } from "./globals"

export type RecursivePartialNull<T> = T extends object
  ? {
      [P in keyof T]?: RecursivePartialNull<T[P]>;
    }
  : T | null;

export class BamlSyncClient {
  private runtime: BamlRuntime
  private ctx_manager: BamlCtxManager

  constructor(private runtime: BamlRuntime, private ctx_manager: BamlCtxManager) {}

  /*
  * @deprecated NOT IMPLEMENTED as streaming must by async. We
  * are not providing an async version as we want to reserve the
  * right to provide a sync version in the future.
  */
  get stream() {
    throw new Error("stream is not available in BamlSyncClient. Use `import { b } from 'baml_client/async_client")
  }  

  
  AnalyzeBooks(
      input: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): BookAnalysis {
    try {
    const raw = this.runtime.callFunctionSync(
      "AnalyzeBooks",
      {
        "input": input
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as BookAnalysis
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
  AnalyzeVanSide(
      vanImage: Image,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): VanSideAnalysis {
    try {
    const raw = this.runtime.callFunctionSync(
      "AnalyzeVanSide",
      {
        "vanImage": vanImage
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as VanSideAnalysis
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
  AnswerQuestion(
      question: string,context: Context,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Answer {
    try {
    const raw = this.runtime.callFunctionSync(
      "AnswerQuestion",
      {
        "question": question,"context": context
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as Answer
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
  ClassifyMessage(
      convo: Message[],
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Category[] {
    try {
    const raw = this.runtime.callFunctionSync(
      "ClassifyMessage",
      {
        "convo": convo
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as Category[]
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
  DescribeCharacter(
      first_image: Image,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): CharacterDescription {
    try {
    const raw = this.runtime.callFunctionSync(
      "DescribeCharacter",
      {
        "first_image": first_image
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as CharacterDescription
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
  ExtractPerson(
      input: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Person {
    try {
    const raw = this.runtime.callFunctionSync(
      "ExtractPerson",
      {
        "input": input
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as Person
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
  ExtractResume(
      raw_text: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Resume {
    try {
    const raw = this.runtime.callFunctionSync(
      "ExtractResume",
      {
        "raw_text": raw_text
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as Resume
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
  ExtractResumeNoStructure(
      raw_text: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): string {
    try {
    const raw = this.runtime.callFunctionSync(
      "ExtractResumeNoStructure",
      {
        "raw_text": raw_text
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as string
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
  GenerateGuide(
      arg: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Guide {
    try {
    const raw = this.runtime.callFunctionSync(
      "GenerateGuide",
      {
        "arg": arg
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as Guide
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
  GenerateReplies(
      tweets: Tweet[],
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Reply[] {
    try {
    const raw = this.runtime.callFunctionSync(
      "GenerateReplies",
      {
        "tweets": tweets
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as Reply[]
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
  GetRecipe(
      arg: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Recipe {
    try {
    const raw = this.runtime.callFunctionSync(
      "GetRecipe",
      {
        "arg": arg
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as Recipe
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
  IdentifyVehicleSide(
      vanImage: Image,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): VehicleSideResponse {
    try {
    const raw = this.runtime.callFunctionSync(
      "IdentifyVehicleSide",
      {
        "vanImage": vanImage
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as VehicleSideResponse
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
  IsResume(
      raw_text: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): boolean {
    try {
    const raw = this.runtime.callFunctionSync(
      "IsResume",
      {
        "raw_text": raw_text
      },
      this.ctx_manager.cloneContext(),
      __baml_options__?.tb?.__tb(),
      __baml_options__?.clientRegistry,
    )
    return raw.parsed() as boolean
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
}

export const b = new BamlSyncClient(DO_NOT_USE_DIRECTLY_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_RUNTIME, DO_NOT_USE_DIRECTLY_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_CTX)
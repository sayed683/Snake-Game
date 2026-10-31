


from transformers import AutoTokenizer , AutoModelForCausalLM , pipeline

import torch

from langchain_huggingface import HuggingFacePipeline

# model name
model_name = "Qwen/Qwen2.5-0.5B-Instruct"


# tokenizer
token_izer = AutoTokenizer.from_pretrained(model_name)


# base model 
base_model = AutoModelForCausalLM.from_pretrained(model_name ,
                                                  dtype = torch.float16 ,
                                                  device_map = "auto"
                                                   )


# pipe
pipe = pipeline(
            "text-generation",
            tokenizer = token_izer,
            model = base_model,
            max_new_tokens = 256,
            do_sample = True,
            return_full_text = False,
            temperature = 0.7,
            repetition_penalty = 1.1
            )


# llm 
llm = HuggingFacePipeline(pipeline = pipe) 


# func for run model 
def run_Qwen_model(prompt: str):

    
# messages >> template : list of two dictionaries
    messages = [
         # first dic for model instruction : role  , content 
        {
        "role" : "system",
        "content" : "you are Qwen , created by ALibaba Cloud. you are a helpfull assistant"
        },

      # second dic for human prompt instrucion
        {
        "role" : "user",
        "content" : prompt
        }
    ]


    # apply chat templates
    prompt = token_izer.apply_chat_template(
    messages,
    tokenize = False,
    add_prompt_generation = True
    )


    return llm.invoke(prompt)




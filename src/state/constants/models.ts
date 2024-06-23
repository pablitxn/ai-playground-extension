import {Model} from "@/types/globals.d"

const LlamaModels: Model[] = [
  {
    id: "1",
    name: "LlmModel.Llama",
    description:
      "Llama 3 8B es un modelo de lenguaje autoregresivo optimizado para generación de texto y código, afinado con técnicas de aprendizaje supervisado y de refuerzo con retroalimentación humana para alinearse con preferencias humanas de utilidad y seguridad.",
    releaseDate: new Date("2024-04-18"),
    quantization: "q0f16",
    diskSize: "XXXX",
    url: "https://huggingface.co/QuantFactory/Meta-Llama-3-8B-Instruct-GGUF",
    size: "8.03B params",
    sourceType: "local",
    apiEndpoint: "https://api.huggingface.co/models/Llama-3-8B-Instruct",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["text-generation", "code-generation", "english"],
    metadata: {
      trainingData: "15T+ tokens",
      contextLength: "8k tokens",
      safetyFeatures: "Reinforcement learning with human feedback (RLHF)"
    }
  },
  {
    id: "2",
    name: "LlmModel.Llama",
    description:
      "Llama 3 8B es un modelo de lenguaje autoregresivo optimizado para generación de texto y código, afinado con técnicas de aprendizaje supervisado y de refuerzo con retroalimentación humana para alinearse con preferencias humanas de utilidad y seguridad.",
    releaseDate: new Date("2024-04-18"),
    quantization: "q3f16_1",
    diskSize: "XXXX",
    url: "https://huggingface.co/QuantFactory/Meta-Llama-3-8B-Instruct-GGUF",
    size: "8.03B params",
    sourceType: "local",
    apiEndpoint: "https://api.huggingface.co/models/Llama-3-8B-Instruct",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["text-generation", "code-generation", "english"],
    metadata: {
      trainingData: "15T+ tokens",
      contextLength: "8k tokens",
      safetyFeatures: "Reinforcement learning with human feedback (RLHF)"
    }
  },
  {
    id: "3",
    name: "LlmModel.Llama",
    description:
      "Llama 3 8B es un modelo de lenguaje autoregresivo optimizado para generación de texto y código, afinado con técnicas de aprendizaje supervisado y de refuerzo con retroalimentación humana para alinearse con preferencias humanas de utilidad y seguridad.",
    releaseDate: new Date("2024-04-18"),
    quantization: "q4f16_1", // Asumiendo  como una variante de float16
    diskSize: "XXXX",
    url: "https://huggingface.co/QuantFactory/Meta-Llama-3-8B-Instruct-GGUF",
    size: "8.03B params",
    sourceType: "local",
    apiEndpoint: "https://api.huggingface.co/models/Llama-3-8B-Instruct",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["text-generation", "code-generation", "english"],
    metadata: {
      trainingData: "15T+ tokens",
      contextLength: "8k tokens",
      safetyFeatures: "Reinforcement learning with human feedback (RLHF)"
    }
  },
  {
    id: "4",
    name: "LlmModel.Llama",
    description:
      "Llama 3 8B es un modelo de lenguaje autoregresivo optimizado para generación de texto y código, afinado con técnicas de aprendizaje supervisado y de refuerzo con retroalimentación humana para alinearse con preferencias humanas de utilidad y seguridad.",
    releaseDate: new Date("2024-04-18"),
    quantization: "q4f32_1",
    diskSize: "XXXX",
    url: "https://huggingface.co/QuantFactory/Meta-Llama-3-8B-Instruct-GGUF",
    size: "8.03B params",
    sourceType: "local",
    apiEndpoint: "https://api.huggingface.co/models/Llama-3-8B-Instruct",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["text-generation", "code-generation", "english"],
    metadata: {
      trainingData: "15T+ tokens",
      contextLength: "8k tokens",
      safetyFeatures: "Reinforcement learning with human feedback (RLHF)"
    }
  }
]

const HermesModels: Model[] = [
  {
    id: "3",
    name: "LlmModel.Hermes",
    description:
      "An upgraded version of Nous Hermes 2, built on the updated OpenHermes 2.5 Dataset with added Function Calling and JSON Mode dataset. Known for advanced language understanding and generation, excelling in conversational AI, task automation, and structured data transformation.",
    releaseDate: new Date("2024-05-05"),
    quantization: "q3f16_1",
    diskSize: "XXXXX",
    url: "https://huggingface.co/NousResearch/Hermes-2-Pro-Llama-3-8B",
    size: "3bB123",
    sourceType: "api",
    apiEndpoint:
      "https://huggingface.co/api/models/NousResearch/Hermes-2-Pro-Llama-3-8B",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["language", "conversation", "JSON output", "task automation"],
    metadata: {
      benchmarks: {
        AGIEval: "72.62%",
        GPT4All: "Average performance in general language tasks",
        BigBench: "Specialized in causal judgement and date understanding"
      }
    }
  },
  {
    id: "4",
    name: "LlmModel.Hermes",
    description:
      "An upgraded version of Nous Hermes 2, built on the updated OpenHermes 2.5 Dataset with added Function Calling and JSON Mode dataset. Known for advanced language understanding and generation, excelling in conversational AI, task automation, and structured data transformation.",
    releaseDate: new Date("2024-05-05"),
    quantization: "q4f16_1",
    diskSize: "XXXXX",
    url: "https://huggingface.co/NousResearch/Hermes-2-Pro-Llama-3-8B",
    size: "3bB123",
    sourceType: "api",
    apiEndpoint:
      "https://huggingface.co/api/models/NousResearch/Hermes-2-Pro-Llama-3-8B",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["language", "conversation", "JSON output", "task automation"],
    metadata: {
      benchmarks: {
        AGIEval: "72.62%",
        GPT4All: "Average performance in general language tasks",
        BigBench: "Specialized in causal judgement and date understanding"
      }
    }
  },
  {
    id: "5",
    name: "LlmModel.Hermes",
    description:
      "An upgraded version of Nous Hermes 2, built on the updated OpenHermes 2.5 Dataset with added Function Calling and JSON Mode dataset. Known for advanced language understanding and generation, excelling in conversational AI, task automation, and structured data transformation.",
    releaseDate: new Date("2024-05-05"),
    quantization: "q0f16",
    diskSize: "XXXXX",
    url: "https://huggingface.co/NousResearch/Hermes-2-Pro-Llama-3-8B",
    size: "16 GB",
    sourceType: "api",
    apiEndpoint:
      "https://huggingface.co/api/models/NousResearch/Hermes-2-Pro-Llama-3-8B",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["language", "conversation", "JSON output", "task automation"],
    metadata: {
      benchmarks: {
        AGIEval: "72.62%",
        GPT4All: "Average performance in general language tasks",
        BigBench: "Specialized in causal judgement and date understanding"
      }
    }
  },
  {
    id: "hermes-70b-q0f16",
    name: "LlmModel.Hermes",
    description:
      "Una variante avanzada del modelo Llama, el Hermes-2-Theta-Llama-3-70B es diseñado para generar texto con una mayor comprensión del contexto y una capacidad de predicción mejorada, enfocado en tareas de alta demanda cognitiva.",
    releaseDate: new Date("2024-06-20"),
    quantization: "q0f16",
    diskSize: "XXXX",
    url: "https://huggingface.co/NousResearch/Hermes-2-Theta-Llama-3-70B",
    size: "70 billion parameters",
    sourceType: "local",
    apiEndpoint: "https://api.huggingface.co/models/Hermes-2-Theta-Llama-3-70B",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["text-generation", "advanced-contextual-understanding"],
    metadata: {
      trainingData: "Extensive diverse dataset",
      contextLength: "1024 tokens",
      safetyFeatures: "Advanced safety protocols"
    }
  },
  {
    id: "hermes-70b-q3f16_1",
    name: "LlmModel.Hermes",
    description:
      "Una variante avanzada del modelo Llama, el Hermes-2-Theta-Llama-3-70B es diseñado para generar texto con una mayor comprensión del contexto y una capacidad de predicción mejorada, enfocado en tareas de alta demanda cognitiva.",
    releaseDate: new Date("2024-06-20"),
    quantization: "q3f16_1",
    diskSize: "XXXX",
    url: "https://huggingface.co/NousResearch/Hermes-2-Theta-Llama-3-70B",
    size: "70 billion parameters",
    sourceType: "local",
    apiEndpoint: "https://api.huggingface.co/models/Hermes-2-Theta-Llama-3-70B",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["text-generation", "advanced-contextual-understanding"],
    metadata: {
      trainingData: "Extensive diverse dataset",
      contextLength: "1024 tokens",
      safetyFeatures: "Advanced safety protocols"
    }
  },
  {
    id: "hermes-70b-q4f16_1",
    name: "LlmModel.Hermes",
    description:
      "Una variante avanzada del modelo Llama, el Hermes-2-Theta-Llama-3-70B es diseñado para generar texto con una mayor comprensión del contexto y una capacidad de predicción mejorada, enfocado en tareas de alta demanda cognitiva.",
    releaseDate: new Date("2024-06-20"),
    quantization: "q4f16_1",
    diskSize: "XXXX",
    url: "https://huggingface.co/NousResearch/Hermes-2-Theta-Llama-3-70B",
    size: "70 billion parameters",
    sourceType: "local",
    apiEndpoint: "https://api.huggingface.co/models/Hermes-2-Theta-Llama-3-70B",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["text-generation", "advanced-contextual-understanding"],
    metadata: {
      trainingData: "Extensive diverse dataset",
      contextLength: "1024 tokens",
      safetyFeatures: "Advanced safety protocols"
    }
  }
]

const Phi3: Model[] = [
  {
    id: "phi3-mini-128k-instruct-q0f16",
    name: "LlmModel.Phi3Mini",
    description:
      "Phi-3-mini-128k-instruct es un modelo ligero y avanzado de 3.8 mil millones de parámetros, entrenado con conjuntos de datos Phi-3 que incluyen datos web públicos filtrados y datos sintéticos, enfocándose en propiedades de alta calidad y densidad de razonamiento.",
    releaseDate: new Date("2024-04-23"),
    quantization: "q0f16",
    diskSize: "XXXX",
    url: "https://huggingface.co/microsoft/Phi-3-mini-128k-instruct",
    size: "3.8 billion parameters",
    sourceType: "local",
    localPath: "/models/phi3-mini-128k-instruct-q0f16",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: [
      "text-generation",
      "code-generation",
      "question-answering",
      "logical-reasoning"
    ],
    metadata: {
      trainingData: "3.3 trillion tokens",
      contextLength: "128K tokens",
      safetyFeatures:
        "Supervised fine-tuning (SFT) and Direct Preference Optimization (DPO)",
      benchmarks: ["MMLU", "MT-bench"],
      performance: "Comparable to models like Mixtral 8x7B and GPT-3.5"
    }
  },
  {
    id: "phi3-mini-128k-instruct-q4f16_1",
    name: "LlmModel.Phi3Mini",
    description:
      "Variante cuantizada del modelo Phi-3-mini-128k-instruct, proporcionando una representación eficiente sin comprometer significativamente la precisión o el rendimiento.",
    releaseDate: new Date("2024-04-23"),
    quantization: "q4f16_1",
    diskSize: "XXXX",
    url: "https://huggingface.co/microsoft/Phi-3-mini-128k-instruct",
    size: "3.8 billion parameters",
    sourceType: "local",
    localPath: "/models/phi3-mini-128k-instruct-q4f16_1",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: [
      "text-generation",
      "code-generation",
      "question-answering",
      "logical-reasoning"
    ],
    metadata: {
      trainingData: "3.3 trillion tokens",
      contextLength: "128K tokens",
      safetyFeatures:
        "Supervised fine-tuning (SFT) and Direct Preference Optimization (DPO)",
      benchmarks: ["MMLU", "MT-bench"],
      performance: "High efficiency in resource-constrained environments"
    }
  },
  {
    id: "phi3-mini-128k-instruct-q4f32_1",
    name: "LlmModel.Phi3Mini",
    description:
      "Otra variante cuantizada del Phi-3-mini-128k-instruct que utiliza cuantización de 32 bits para mejorar la precisión mientras se mantiene un tamaño eficiente.",
    releaseDate: new Date("2024-04-23"),
    quantization: "q4f32_1",
    diskSize: "XXXX",
    url: "https://huggingface.co/microsoft/Phi-3-mini-128k-instruct",
    size: "3.8 billion parameters",
    sourceType: "local",
    localPath: "/models/phi3-mini-128k-instruct-q4f32_1",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: [
      "text-generation",
      "code-generation",
      "question-answering",
      "logical-reasoning"
    ],
    metadata: {
      trainingData: "3.3 trillion tokens",
      contextLength: "128K tokens",
      safetyFeatures:
        "Supervised fine-tuning (SFT) and Direct Preference Optimization (DPO)",
      benchmarks: ["MMLU", "MT-bench"],
      performance: "Balanced between computational efficiency and precision"
    }
  }
]

const MixtralModels: Model[] = [
  {
    id: "2",
    name: "LlmModel.Mixtral",
    description:
      "Mistral-7B-Instruct-v0.3 es un modelo de lenguaje grande optimizado para seguir instrucciones y realizar llamadas a funciones externas, permitiendo su integración en diversas aplicaciones más allá de la generación de texto. Soporta un tokenizador avanzado y tiene una atención agrupada para un procesamiento eficiente de largas secuencias de texto.",
    releaseDate: new Date("2024-05-22"),
    quantization: "q0f16",
    diskSize: "XXXX",
    url: "https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3",
    size: "7 billion parameters",
    sourceType: "local",
    localPath: "/home/mistral_models/7B-Instruct-v0.3",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["instruction-following", "function-calling", "api-integration"],
    metadata: {
      vocabularySize: "32768 tokens",
      tokenizer: "v3",
      attentionType: "grouped-query and sliding-window",
      trainingData: "diverse datasets for instruction-based tasks"
    }
  },
  {
    id: "2a",
    name: "LlmModel.Mixtral",
    description:
      "Mistral-7B-Instruct-v0.3 es un modelo de lenguaje grande optimizado para seguir instrucciones y realizar llamadas a funciones externas, permitiendo su integración en diversas aplicaciones más allá de la generación de texto. Soporta un tokenizador avanzado y tiene una atención agrupada para un procesamiento eficiente de largas secuencias de texto.",
    releaseDate: new Date("2024-05-22"),
    quantization: "q0f16",
    diskSize: "XXXX",
    url: "https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3",
    size: "7 billion parameters",
    sourceType: "local",
    localPath: "/home/mistral_models/7B-Instruct-v0.3",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["instruction-following", "function-calling", "api-integration"],
    metadata: {
      vocabularySize: "32768 tokens",
      tokenizer: "v3",
      attentionType: "grouped-query and sliding-window",
      trainingData: "diverse datasets for instruction-based tasks"
    }
  },
  {
    id: "2b",
    name: "LlmModel.Mixtral",
    description:
      "Variante del Mistral-7B-Instruct-v0.3 con cuantización q3f16_1, mantiene las características y funcionalidades del modelo original pero optimizado para ser más eficiente en el uso de memoria y rendimiento computacional.",
    releaseDate: new Date("2024-05-22"),
    quantization: "q3f16_1",
    diskSize: "XXXX",
    url: "https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3",
    size: "7 billion parameters",
    sourceType: "local",
    localPath: "/home/mistral_models/7B-Instruct-v0.3",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["instruction-following", "function-calling", "api-integration"],
    metadata: {
      vocabularySize: "32768 tokens",
      tokenizer: "v3",
      attentionType: "grouped-query and sliding-window",
      trainingData: "diverse datasets for instruction-based tasks"
    }
  },
  {
    id: "2c",
    name: "LlmModel.Mixtral",
    description:
      "Variante del Mistral-7B-Instruct-v0.3 con cuantización q4f16_1, similar a las otras versiones pero con ajustes adicionales para maximizar la eficiencia en entornos con recursos limitados.",
    releaseDate: new Date("2024-05-22"),
    quantization: "q4f16_1",
    diskSize: "XXXX",
    url: "https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3",
    size: "7 billion parameters",
    sourceType: "local",
    localPath: "/home/mistral_models/7B-Instruct-v0.3",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["instruction-following", "function-calling", "api-integration"],
    metadata: {
      vocabularySize: "32768 tokens",
      tokenizer: "v3",
      attentionType: "grouped-query and sliding-window",
      trainingData: "diverse datasets for instruction-based tasks"
    }
  },
  {
    id: "2d",
    name: "LlmModel.Mixtral",
    description:
      "Versión cuantizada q4f32_1 del Mistral-7B-Instruct-v0.3 que ofrece un equilibrio entre rendimiento y eficiencia energética, diseñado para sistemas con capacidades computacionales variadas.",
    releaseDate: new Date("2024-05-22"),
    quantization: "q4f32_1",
    diskSize: "XXXX",
    url: "https://huggingface.co/mistralai/Mistral/Mistral-7B-Instruct-v0.3",
    size: "7 billion parameters",
    sourceType: "local",
    localPath: "/home/mistral_models/7B-Instruct-v0.3",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["instruction-following", "function-calling", "api-integration"],
    metadata: {
      vocabularySize: "32768 tokens",
      tokenizer: "v3",
      attentionType: "grouped-query and sliding-window",
      trainingData: "diverse datasets for instruction-based tasks"
    }
  }
]

const QwenModels: Model[] = [
  {
    id: "qwen1_5-0_5b-chat-q0f16",
    name: "Qwen1.5-0.5B-Chat",
    quantization: "q0f16",
    diskSize: "xxx",
    url: "https://huggingface.co/Qwen/Qwen1.5-0.5B-Chat",
    description:
      "Qwen1.5 es la versión beta de Qwen2, un modelo de lenguaje solo decodificador basado en la arquitectura Transformer. Preentrenado con una gran cantidad de datos, ofrece mejoras significativas en modelos de chat, soporte multilingüe y manejo estable de 32K de longitud de contexto.",
    releaseDate: new Date("2023-01-01"), // Fecha ficticia de lanzamiento
    size: "620M params",
    sourceType: "local",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date(),
    tags: ["text-generation", "chat", "multilingual"],
    metadata: {
      trainingData: "Extensive dataset across multiple languages",
      contextLength: "32000 tokens",
      additionalFeatures:
        "Improved tokenizer, SwiGLU activation, attention QKV bias"
    }
  },
  {
    id: "qwen1_5-0_5b-chat-q4f16_1",
    name: "Qwen1.5-0.5B-Chat-GGUF",
    quantization: "q4f16_1",
    diskSize: "xxx",
    url: "https://huggingface.co/Qwen/Qwen1.5-0.5B-Chat-GGUF",
    description:
      "Qwen1.5 es la versión beta de Qwen2, un modelo de lenguaje solo decodificador basado en la arquitectura Transformer. Preentrenado con una gran cantidad de datos, ofrece mejoras significativas en modelos de chat, soporte multilingüe y manejo estable de 32K de longitud de contexto.",
    releaseDate: new Date("2023-01-01"), // Fecha ficticia de lanzamiento
    size: "620M params",
    sourceType: "local",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date(),
    tags: ["text-generation", "chat", "multilingual"],
    metadata: {
      trainingData: "Extensive dataset across multiple languages",
      contextLength: "32000 tokens",
      additionalFeatures:
        "Improved tokenizer, SwiGLU activation, attention QKV bias"
    }
  },
  {
    id: "qwen1_5-0_5b-chat-q4f32_1",
    name: "Qwen1.5-0.5B-Chat-GGUF",
    quantization: "q4f32_1",
    diskSize: "xxx",
    url: "https://huggingface.co/Qwen/Qwen1.5-0.5B-Chat-GGUF",
    description:
      "Qwen1.5 es la versión beta de Qwen2, un modelo de lenguaje solo decodificador basado en la arquitectura Transformer. Preentrenado con una gran cantidad de datos, ofrece mejoras significativas en modelos de chat, soporte multilingüe y manejo estable de 32K de longitud de contexto.",
    releaseDate: new Date("2023-01-01"), // Fecha ficticia de lanzamiento
    size: "620M params",
    sourceType: "local",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date(),
    tags: ["text-generation", "chat", "multilingual"],
    metadata: {
      trainingData: "Extensive dataset across multiple languages",
      contextLength: "32000 tokens",
      additionalFeatures:
        "Improved tokenizer, SwiGLU activation, attention QKV bias"
    }
  }
]

export const LOCAL_MODELS = [
  ...LlamaModels,
  ...HermesModels,
  ...Phi3,
  ...MixtralModels,
  ...QwenModels
]

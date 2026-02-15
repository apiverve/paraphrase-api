using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.Paraphrase
{
    /// <summary>
    /// Query options for the Paraphrase API
    /// </summary>
    public class ParaphraseQueryOptions
    {
        /// <summary>
        /// The text to paraphrase
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }

        /// <summary>
        /// Paraphrase style: formal, casual, simple, or creative
        /// </summary>
        [JsonProperty("style")]
        public string Style { get; set; }
    }
}

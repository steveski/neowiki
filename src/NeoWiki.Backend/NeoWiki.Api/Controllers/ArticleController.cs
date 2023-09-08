using Microsoft.AspNetCore.Mvc;
using NeoWiki.Api.Contracts;
using System.Net.Mime;

namespace NeoWiki.Api.Controllers;

[ApiVersion("1.0")]
[ApiController]
[Route("api/[controller]")]
[ResponseCache(Duration = 60, VaryByQueryKeys = new string[] { "*" })]
public class ArticleController : ControllerBase
{
    [HttpGet]
    [Route("/article")]
    [Produces(MediaTypeNames.Application.Json, Type = typeof(ArticleResponse))]
    public async Task<IActionResult> GetArticle(string articlename, CancellationToken cancellationToken = default)
    {
        return Ok(new ArticleResponse());
    }

}

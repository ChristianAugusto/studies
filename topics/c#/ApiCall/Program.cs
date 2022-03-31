using RestSharp;

namespace ApiCall
{
  class Program
  {
    public static void Main(string[] args)
    {
      ApiCall().Wait();
    }

    private async static Task ApiCall()
    {
      var url = "https://random-data-api.com/api/blood/random_blood";

      var client = new RestClient();
      var request = new RestRequest(url);
      var response = await client.GetAsync(request);

      Console.WriteLine(response.Content.ToString());
    }
  }
}

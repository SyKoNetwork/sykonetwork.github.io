<template>
  <div class="docs">
    <Navbar />
    <header class="bg-primary text-white text-center">
      <div class="container d-flex align-items-end flex-column">
        <div class="row d-flex align-items-center flex-row-reverse p-4">
          <div class="rounded col align-self-center">
            <img
              class="bg-white rounded"
              src="../assets/pack_icon_alpha.png"
              alt=""
            />
          </div>
          <div class="col align-self-center text-uppercase">
            <h1>Addon Documentation</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="bg-dark p-4">
      <div class="container text-light bg-secondary p-4">
        <h1 class="row p-4">minecraft:tree_feature</h1>
      </div>
      <div class="container text-light bg-secondary p-4">
        <table
          class="container table table-striped table-secondary table-bordered"
        >
          <thead class="thead-dark">
            <tr>
              <th scope="col" width="250rem">Name</th>
              <th scope="col" width="50rem">Type</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">may_grow_on</th>
              <th scope="col">String/JSON Object</th>
              <th scope="col">Name of the block the tree can grow on</th>
            </tr>
            <tr>
              <th scope="col">may_grow_through</th>
              <th scope="col">String/JSON Object</th>
              <th scope="col">Name of the block the tree can grow through</th>
            </tr>
            <tr>
              <th scope="col">may_replace</th>
              <th scope="col">String/JSON Object</th>
              <th scope="col">Name of the block the tree can replace</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container text-light bg-secondary p-4">
        <div>
          <h3>acacia_trunk</h3>
        </div>
        <table
          class="container table table-striped table-secondary table-bordered"
        >
          <thead class="thead-dark">
            <tr>
              <th scope="col" width="250rem">Name</th>
              <th scope="col" width="50rem">Type</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">trunk_height</th>
              <th scope="col">JSON Object</th>
              <th scope="col">
                Sets the height of the trunk
                <table
                  class="table table-striped table-secondary table-bordered"
                >
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="col">base</th>
                      <th scope="col">Integer</th>
                      <th scope="col">The base height of the Trunk</th>
                    </tr>
                    <tr>
                      <th scope="col">intervals</th>
                      <th scope="col">Array</th>
                      <th scope="col">
                        The amount the tree grows along the branches
                      </th>
                    </tr>
                  </tbody>
                </table>
              </th>
            </tr>
            <tr>
              <th scope="col">trunk_width</th>
              <th scope="col">Integer</th>
              <th scope="col">Sets the width of the base trunk</th>
            </tr>
            <tr>
              <th scope="col">trunk_block</th>
              <th scope="col">String/JSON Object</th>
              <th scope="col">Name of the block to be used for the trunk</th>
            </tr>
            <tr>
              <th>trunk_lean</th>
              <th>JSON Object</th>
              <th>
                Sets the height and steps of the branches coming from the main
                trunk
                <table
                  class="table table-striped table-secondary table-bordered"
                >
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="col">allow_diagonal_growth</th>
                      <th scope="col">Boolean</th>
                      <th scope="col">
                        If true, the Trunk can grow at an angle
                      </th>
                    </tr>
                    <tr>
                      <th scope="col">lean_height</th>
                      <th scope="col">Integer</th>
                      <th scope="col">
                        The amount the tree grows along the branches
                      </th>
                    </tr>
                    <tr>
                      <th scope="col">lean_steps</th>
                      <th scope="col">Integer</th>
                      <th scope="col">
                        The number of steps up the trunk will take to reach the
                        max height
                      </th>
                    </tr>
                  </tbody>
                </table>
              </th>
            </tr>
            <tr>
              <th scope="col" class="table-dark">branches</th>
            </tr>
            <tr>
              <th scope="col">branch_length</th>
              <th scope="col">JSON Object</th>
              <th scope="col">
                Sets the range of the branch branch_length
                <table
                  class="table table-striped table-secondary table-bordered"
                >
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="col">range_min</th>
                      <th scope="col">Integer</th>
                      <th scope="col">The minimum value for branch length</th>
                    </tr>
                    <tr>
                      <th scope="col">range_max</th>
                      <th scope="col">Integer</th>
                      <th scope="col">The maximum value for branch length</th>
                    </tr>
                  </tbody>
                </table>
              </th>
            </tr>
            <tr>
              <th scope="col">branch_position</th>
              <th scope="col">JSON Object</th>
              <th scope="col">
                Sets the range of the branch position
                <table
                  class="table table-striped table-secondary table-bordered"
                >
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="col">range_min</th>
                      <th scope="col">Integer</th>
                      <th scope="col">The minimum value for branch length</th>
                    </tr>
                    <tr>
                      <th scope="col">range_max</th>
                      <th scope="col">Integer</th>
                      <th scope="col">The maximum value for branch length</th>
                    </tr>
                  </tbody>
                </table>
              </th>
            </tr>
            <tr>
              <th scope="col">branch_chance</th>
              <th scope="col">Integer</th>
              <th scope="col">
                (0 - 100) Sets the chance of Branches Generating
              </th>
            </tr>
            <tr>
              <th scope="col">branch_canopy</th>
              <th scope="col">JSON Object</th>
              <th scope="col">
                Takes a Canopy object to generate on the ends of the branches
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container text-light bg-secondary p-4">
        <div>
          <h3>fallen_trunk</h3>
        </div>
        <table
          class="container table table-striped table-secondary table-bordered"
        >
          <thead class="thead-dark">
            <tr>
              <th scope="col" width="250rem">Name</th>
              <th scope="col" width="50rem">Type</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tr>
            <th scope="col">stump_height</th>
            <th scope="col">Boolean</th>
            <th scope="col">Sets the height of the stump block</th>
          </tr>
          <tr>
            <th scope="col">height_modifier</th>
            <th scope="col">Integer</th>
            <th scope="col">Sets the height varience of the stump block</th>
          </tr>
          <tr>
            <th scope="col">log_length</th>
            <th scope="col">Integer</th>
            <th scope="col">Sets the length of the fallen trunk</th>
          </tr>
          <tr>
            <th scope="col">trunk_block</th>
            <th scope="col">String/JSON Object</th>
            <th scope="col">Name of the block to be used for the trunk</th>
          </tr>
          <tr>
            <th scope="col">log_decoration_feature</th>
            <th scope="col">String/JSON Object</th>
            <th scope="col">
              Name of the block to be used for the log decoration
            </th>
          </tr>
          <tr>
            <th scope="col">trunk_decoration</th>
            <th scope="col">JSON Object</th>
            <th scope="col">
              <table
                class="
                  container
                  table table-striped table-secondary table-bordered
                "
              >
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" width="250rem">Name</th>
                    <th scope="col" width="50rem">Type</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tr>
                  <th scope="col">decoration_chance</th>
                  <th scope="col">JSON Object</th>
                  <th scope="col">
                    <table
                      class="
                        container
                        table table-striped table-secondary table-bordered
                      "
                    >
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col" width="250rem">Name</th>
                          <th scope="col" width="50rem">Type</th>
                        </tr>
                      </thead>
                      <tr>
                        <th scope="col">numerator</th>
                        <th scope="col">Integer</th>
                      </tr>
                      <tr>
                        <th scope="col">denominator</th>
                        <th scope="col">Integer</th>
                      </tr>
                    </table>
                  </th>
                </tr>
                <tr>
                  <th scope="col">num_steps</th>
                  <th scope="col">Integer</th>
                  <th scope="col">
                    The number of steps the decoratione gets placed
                  </th>
                </tr>
                <tr>
                  <th scope="col">step_direction</th>
                  <th scope="col">String</th>
                  <th scope="col">"down", "up", "out", "away"</th>
                </tr>
                <tr>
                  <th scope="col">decoration_block</th>
                  <th scope="col">JSON Object</th>
                  <th scope="col">
                    Name of the block to be used for the trunk decoration
                  </th>
                </tr>
              </table>
            </th>
          </tr>
        </table>
      </div>
      <div class="container text-light bg-secondary p-4">
        <div>
          <h3>fancy_trunk</h3>
        </div>
        <table
          class="container table table-striped table-secondary table-bordered"
        >
          <thead class="thead-dark">
            <tr>
              <th scope="col" width="250rem">Name</th>
              <th scope="col" width="50rem">Type</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tr>
            <th scope="col">trunk_height</th>
            <th scope="col">Integer</th>
            <th scope="col">
              <table
                class="
                  container
                  table table-striped table-secondary table-bordered
                "
              >
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" width="250rem">Name</th>
                    <th scope="col" width="50rem">Type</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tr>
                  <th scope="col">base</th>
                  <th scope="col">Integer</th>
                  <th scope="col">Sets the base trunk height</th>
                </tr>
                <tr>
                  <th scope="col">varience</th>
                  <th scope="col">Integer</th>
                  <th scope="col">Sets the varience of the trunk height</th>
                </tr>
                <tr>
                  <th scope="col">scale</th>
                  <th scope="col">Decimal</th>
                  <th scope="col">
                    Sets the scale of the trunk height to increase based on
                    varience
                  </th>
                </tr>
              </table>
            </th>
          </tr>
          <tr>
            <th scope="col">trunk_width</th>
            <th scope="col">Integer</th>
            <th scope="col">Sets the width of the trunk</th>
          </tr>
          <tr>
            <th scope="col">width_scale</th>
            <th scope="col">Decimal</th>
            <th scope="col">Sets the varience of the trunk width</th>
          </tr>
          <tr>
            <th scope="col">foliage_altitude_factor</th>
            <th scope="col">Decimal</th>
            <th scope="col">Sets the hight at which leaves can generate</th>
          </tr>
          <tr>
            <th scope="col">trunk_block</th>
            <th scope="col">String/JSON Object</th>
            <th scope="col">Name of the block to be used for the trunk</th>
          </tr>
          <tr>
            <th scope="col" class="table-dark">branches</th>
          </tr>
          <tr>
            <th scope="col">slope</th>
            <th scope="col">Decimal</th>
            <th scope="col">(-1 - 1) Sets the slope height for branches</th>
          </tr>
          <tr>
            <th scope="col">density</th>
            <th scope="col">Decimal</th>
            <th scope="col">The maximum value for branch length</th>
          </tr>
          <tr>
            <th scope="col">min_altitude_factor</th>
            <th scope="col">Decimal</th>
            <th scope="col">The min height scale for branch placement</th>
          </tr>
        </table>
      </div>
      <div class="container text-light bg-secondary p-4">
        <div>
          <h3>trunk</h3>
        </div>
        <table
          class="container table table-striped table-secondary table-bordered"
        >
          <thead class="thead-dark">
            <tr>
              <th scope="col" width="250rem">Name</th>
              <th scope="col" width="50rem">Type</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tr>
            <th scope="col">can_be_submerged</th>
            <th scope="col">Boolean</th>
            <th scope="col">
              Sets wether the trunk will generate under the surface
            </th>
          </tr>
          <tr>
            <th scope="col">trunk_height</th>
            <th scope="col">Integer</th>
            <th scope="col">Sets the trunk height</th>
          </tr>
          <tr>
            <th scope="col">trunk_block</th>
            <th scope="col">String/JSON Object</th>
            <th scope="col">Name of the block to be used for the trunk</th>
          </tr>
          <tr>
            <th scope="col">trunk_decoration</th>
            <th scope="col">JSON Object</th>
            <th scope="col">
              <table
                class="
                  container
                  table table-striped table-secondary table-bordered
                "
              >
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" width="250rem">Name</th>
                    <th scope="col" width="50rem">Type</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tr>
                  <th scope="col">decoration_chance</th>
                  <th scope="col">JSON Object</th>
                  <th scope="col">
                    <table
                      class="
                        container
                        table table-striped table-secondary table-bordered
                      "
                    >
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col" width="250rem">Name</th>
                          <th scope="col" width="50rem">Type</th>
                        </tr>
                      </thead>
                      <tr>
                        <th scope="col">numerator</th>
                        <th scope="col">Integer</th>
                      </tr>
                      <tr>
                        <th scope="col">denominator</th>
                        <th scope="col">Integer</th>
                      </tr>
                    </table>
                  </th>
                </tr>
                <tr>
                  <th scope="col">num_steps</th>
                  <th scope="col">Integer</th>
                  <th scope="col">
                    The number of steps the decoratione gets placed
                  </th>
                </tr>
                <tr>
                  <th scope="col">step_direction</th>
                  <th scope="col">String</th>
                  <th scope="col">"down", "up", "out", "away"</th>
                </tr>
                <tr>
                  <th scope="col">decoration_block</th>
                  <th scope="col">JSON Object</th>
                  <th scope="col">
                    Name of the block to be used for the trunk decoration
                  </th>
                </tr>
              </table>
            </th>
          </tr>
        </table>
      </div>
      <Adsense
        style="display: block"
        data-ad-client="ca-pub-0477942223783479"
        data-ad-slot="5502981571"
        data-ad-format="auto"
        data-full-width-responsive="true"
      >
      </Adsense>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
// @ is an alias to /src

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
